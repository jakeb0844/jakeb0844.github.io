const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { type } = require('os');
const axios = require('axios');
const cheerio = require('cheerio');
const classes = require('./data/classes');

class WowheadScraper {
    constructor () {
        this.browser = null;
        this.page = null;
        this.url =
            'https://www.wowhead.com/guide/classes/paladin/retribution/bis-gear';
    }

    async initialize() {
        try {
            console.log('🚀 Initializing browser...');
            this.browser = await puppeteer.launch({
                headless: true, // Run in headless mode (no visible window)
                defaultViewport: { width: 1920, height: 1080 },
                protocolTimeout: 0, // Disable protocol timeout for long-running operations
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-dev-shm-usage',
                    '--disable-accelerated-2d-canvas',
                    '--no-first-run',
                    '--no-zygote',
                    '--disable-gpu',
                    '--disable-web-security',
                    '--disable-features=VizDisplayCompositor',
                    '--disable-background-timer-throttling',
                    '--disable-backgrounding-occluded-windows',
                    '--disable-renderer-backgrounding',
                    '--disable-background-networking',
                ],
            });

            this.page = await this.browser.newPage();

            // Speed up by blocking heavy resources
            await this.page.setRequestInterception(true);
            this.page.on('request', (req) => {
                try {
                    const type = req.resourceType();
                    const url = req.url();
                    if (
                        type === 'image' ||
                        type === 'media' ||
                        type === 'font' ||
                        url.includes('googletag') ||
                        url.includes('doubleclick') ||
                        url.includes('google-analytics')
                    ) {
                        req.abort();
                    } else {
                        req.continue();
                    }
                } catch {
                    req.continue();
                }
            });

            // Set user agent to avoid detection
            await this.page.setUserAgent(
                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            );

            // Set viewport
            await this.page.setViewport({ width: 1920, height: 1080 });

            // Set extra headers
            await this.page.setExtraHTTPHeaders({
                'Accept-Language': 'en-US,en;q=0.9',
                'Accept-Encoding': 'gzip, deflate, br',
                Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            });

            console.log('✅ Browser initialized successfully');
        } catch (error) {
            console.error('❌ Failed to initialize browser:', error);
            throw error;
        }
    }

    async scrapePage() {
        try {
            console.log(`📡 Navigating to: ${this.url}`);

            // Navigate with better error handling
            await this.page.goto(this.url, {
                waitUntil: 'networkidle2',
                timeout: 90000,
            });

            // Wait for tier list and anchors to be present
            try {
                await this.page.waitForSelector('.tier-list-tier', { timeout: 30000 });
                await this.page.waitForFunction(
                    () => document.querySelectorAll('.tier-list-tier .tier-content a[href*="item="]').length > 0,
                    { timeout: 30000 }
                );
            } catch (e) {
                console.log('⚠️ Tier list anchors not immediately visible, proceeding anyway...');
            }

            // Scroll down to trigger lazy loading
            console.log('📜 Scrolling to trigger lazy loading...');
            await this.scrollToBottom();

            // Short settle
            await new Promise((resolve) => setTimeout(resolve, 1500));

            console.log('🔍 Scraping page content...');

            const scrapedData = await this.page.evaluate(() => {
                const data = {
                    title: '',
                    tierList: {
                        s: [],
                        a: [],
                        b: [],
                        c: [],
                        d: [],
                        e: [],
                        f: [],
                    },
                };

                // Helper function to extract background URL
                function extractBgUrl(cssText) {
                    // Decode HTML entities (so &quot; becomes ")
                    const t = document.createElement('textarea');
                    t.innerHTML = cssText;
                    const decoded = t.value;

                    // Grab the first url(...) and return its inner value (with or without quotes)
                    const m = decoded.match(/url\(\s*(['"]?)(.*?)\1\s*\)/i);
                    return m ? m[2] : null;
                }

                // Use jQuery if available, fallback to vanilla JS
                const $ = window.jQuery || window.$;

                if ($) {
                    console.log('jQuery is available!');

                    // Get page title
                    data.title = $('h1').first().text().trim();

                    // Trinket Table
                    let tierLists = $('.tier-list-tier');

                    // Process each tier list
                    tierLists.each(function () {
                        const tierList = $(this);
                        const tierLabel = tierList
                            .find('.tier-label')
                            .text()
                            .trim()
                            .toLowerCase();
                        const tierContent = tierList.find('.tier-content');

                        // Find all items in this tier
                        tierContent.find('a[href*="item="]').each(function () {
                            const link = $(this);
                            const href = link.attr('href');

                            // Extract item ID from href
                            const itemMatch = href.match(/item=(\d+)/);
                            if (itemMatch) {
                                const itemId = itemMatch[1];

                                // Try to get icon from ins element
                                const insElement = link.find('ins');
                                let iconUrl = null;
                                if (insElement.length > 0) {
                                    const bgImage =
                                        $(insElement).css('background-image');
                                    iconUrl = extractBgUrl(bgImage);
                                } else {
                                    iconUrl = 'not found';
                                }

                                // Add to appropriate tier
                                if (data.tierList[tierLabel]) {
                                    data.tierList[tierLabel].push({
                                        id: itemId,
                                        iconUrl: iconUrl,
                                        href: href,
                                    });
                                }
                            }
                        });
                    });
                } else {
                    console.log('jQuery not available, using vanilla JS');
                    // Fallback to vanilla JS
                    const titleElement = document.querySelector('h1');
                    if (titleElement) {
                        data.title = titleElement.textContent.trim();
                    }

                    const tierLists = document.querySelectorAll('.tier-list-tier');
                    tierLists.forEach((tierList) => {
                        const labelEl = tierList.querySelector('.tier-label');
                        const tierLabel = (labelEl ? labelEl.textContent : '').trim().toLowerCase();
                        const tierContent = tierList.querySelector('.tier-content');
                        if (!tierLabel || !tierContent) return;
                        const links = tierContent.querySelectorAll('a[href*="item="]');
                        links.forEach((link) => {
                            const href = link.getAttribute('href') || '';
                            const m = href.match(/item=(\d+)/);
                            if (!m) return;
                            const itemId = m[1];
                            let iconUrl = null;
                            const insEl = link.querySelector('ins');
                            if (insEl) {
                                const bgImage = getComputedStyle(insEl).backgroundImage || '';
                                const bgMatch = bgImage.match(/url\(\s*(['"]?)(.*?)\1\s*\)/i);
                                iconUrl = bgMatch ? bgMatch[2] : null;
                            } else {
                                iconUrl = 'not found';
                            }
                            if (data.tierList[tierLabel]) {
                                data.tierList[tierLabel].push({ id: itemId, iconUrl, href });
                            }
                        });
                    });
                }

                return data;
            });

            console.log('✅ Page content scraped successfully');
            return scrapedData;
        } catch (error) {
            console.error('❌ Error scraping page:', error);
            throw error;
        }
    }

    async scrapeItemNames(data) {
        try {
            const tiers = Object.keys(data.tierList);

            for (const tier of tiers) {
                const items = data.tierList[tier];
                console.log(
                    `📋 Processing ${items.length
                    } items in tier ${tier.toUpperCase()}...`
                );

                // Resolve item names via lightweight HTTP requests with concurrency
                const concurrency = 8; // tune between 4-12
                await this.runWithConcurrency(items, concurrency, async (item, index) => {
                    try {
                        const itemName = await this.fetchItemNameViaHttp(item.href);
                        item.name = itemName;
                    } catch (error) {
                        console.error(`  ❌ Failed to fetch item ${item.id}:`, error.message);
                        item.name = 'Unknown';
                    }
                });
            }

            console.log('✅ Item names scraped successfully');
            return data;
        } catch (error) {
            console.error('❌ Error scraping item names:', error);
            throw error;
        }
    }

    // Run tasks over an array with a concurrency limit
    async runWithConcurrency(items, limit, taskFn) {
        let nextIndex = 0;
        const worker = async () => {
            while (true) {
                const currentIndex = nextIndex++;
                if (currentIndex >= items.length) return;
                await taskFn(items[currentIndex], currentIndex);
            }
        };
        const workers = Array.from({ length: Math.min(limit, items.length) }, () => worker());
        await Promise.all(workers);
    }

    // Fetch item name without opening a browser page
    async fetchItemNameViaHttp(itemUrl) {
        const headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        };
        try {
            const response = await axios.get(itemUrl, { headers, timeout: 20000 });
            const html = response.data;
            const $ = cheerio.load(html);
            let name = $('.wh-heading-responsive').first().text().trim();
            if (!name) {
                name = $('h1.heading-size-1, h2.heading-size-1, .heading-size-1').first().text().trim();
            }
            return name || 'Unknown Item';
        } catch (error) {
            return 'Unknown Item';
        }
    }

    async scrapeSingleItemName(itemUrl) {
        try {
            // Navigate to the item page with increased timeout
            // await this.page.goto(itemUrl, {
            //     waitUntil: 'domcontentloaded',
            //     timeout: 60000,
            // });

            let page = await this.browser.newPage();
            await page.goto(itemUrl, {
                waitUntil: 'domcontentloaded',
                timeout: 300000, // 5 minutes per page
            });

            // Wait for the page to load and specific element
            try {
                await page.waitForSelector('.wh-heading-responsive', { timeout: 10000 });
            } catch (e) {
                console.log('⚠️ Could not find heading element, trying alternate approach...');
            }

            // Add a small wait to ensure dynamic content loads
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Extract the item name with increased protocol timeout
            const itemName = await page.evaluate(() => {
                let elements = $('.wh-heading-responsive');

                if (elements.length > 0) {
                    let name = $('.wh-heading-responsive')[0].innerText;

                    if (name && typeof name === 'string' && name.length > 0) {
                        return name;
                    }
                }

                // Try alternate selectors if primary fails
                const alternateSelectors = ['h1.heading-size-1', 'h2.heading-size-1', '.heading-size-1'];
                for (const selector of alternateSelectors) {
                    const element = document.querySelector(selector);
                    if (element && element.innerText) {
                        return element.innerText.trim();
                    }
                }

                return 'Unknown Item';
            }, { timeout: 300000 }); // 5 minutes timeout for page evaluation

            return itemName;
        } catch (error) {
            console.error(
                `❌ Error scraping item name from ${itemUrl}:`,
                error.message
            );
            return 'Unknown Item';
        } finally {
            // Clean up the page to prevent memory leaks
            if (page) {
                await page.close();
            }
        }
    }

    async saveData(data) {
        try {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const filename = `trinket-tier-list-${timestamp}.json`;

            await fs.promises.writeFile(filename, JSON.stringify(data, null, 2), 'utf8');
            console.log(`💾 Data saved to: ${filename}`);

            return filename;
        } catch (error) {
            console.error('❌ Error saving data:', error);
            throw error;
        }
    }

    async loadData(filename) {
        try {
            console.log(`📂 Loading data from: ${filename}`);
            const data = await fs.readFile(filename, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error(`❌ Error loading data from ${filename}:`, error);
            throw error;
        }
    }

    async takeScreenshot() {
        try {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const filename = `screenshot-${timestamp}.png`;

            await this.page.screenshot({
                path: filename,
                fullPage: true,
            });

            console.log(`📸 Screenshot saved to: ${filename}`);
            return filename;
        } catch (error) {
            console.error('❌ Error taking screenshot:', error);
            throw error;
        }
    }

    async scrollToBottom() {
        try {
            // Get the height of the rendered page
            const bodyHandle = await this.page.$('body');
            const { height } = await bodyHandle.boundingBox();
            await bodyHandle.dispose();

            // Scroll down in chunks to trigger lazy loading
            const viewportHeight = 1080;
            const scrollStep = viewportHeight * 0.8; // Scroll 80% of viewport height each time

            for (
                let currentPosition = 0;
                currentPosition < height;
                currentPosition += scrollStep
            ) {
                await this.page.evaluate((scrollTo) => {
                    window.scrollTo(0, scrollTo);
                }, currentPosition);

                // Wait a bit between scrolls to allow content to load
                await new Promise((resolve) => setTimeout(resolve, 500));
            }

            // Scroll back to top
            await this.page.evaluate(() => {
                window.scrollTo(0, 0);
            });

            console.log('✅ Scrolling completed');
        } catch (error) {
            console.error('❌ Error during scrolling:', error);
        }
    }

    async close() {
        if (this.browser) {
            await this.browser.close();
            console.log('🔒 Browser closed');
        }
    }
}

async function main() {
    const scraper = new WowheadScraper();

    try {

        //let data = [];
        let timeStart = performance.now();
        let specTrinketData = [];
        const savedData = JSON.parse(fs.readFileSync('data.json', 'utf8'));

        await scraper.initialize();

        console.log('🎯 Starting scraping process...');

        for (let i = 0; i < classes.length; i++) {
            for (let x = 0; x < classes[i].specs.length; x++) {
                let obj = {
                    name: classes[i].specs[x].name,
                    tierList: null,
                };
                const specUrl = classes[i].specs[x].url;
                scraper.url = specUrl;
                //console.log(specUrl);
                // Scrape BiS Page
                const bisData = await scraper.scrapePage();
                console.log('📊 Initial data scraped');
                // Scrape Item Names
                const trinketData = await scraper.scrapeItemNames(bisData);
                console.log('📊 Item names scraped');
                obj.tierList = trinketData.tierList;
                specTrinketData.push(obj);
            }
        }

        // Step 1: Scrape the main page data
        // const data = await scraper.scrapePage();
        // console.log('📊 Initial data scraped');

        // Step 2: Scrape individual item names
        //console.log('🔍 Starting to scrape item names...');
        // const enrichedData = await scraper.scrapeItemNames(data);
        // console.log('📊 Item names scraped');

        // Save the enriched data
        await scraper.saveData(specTrinketData);

        let timeEnd = performance.now();
        console.log(`🎉 Scraping completed successfully! in ${timeEnd - timeStart}ms`);
    } catch (error) {
        console.error('💥 Scraping failed:', error);
    } finally {
        await scraper.close();
    }
}

// Run the scraper
if (require.main === module) {
    main();
}

module.exports = WowheadScraper;
