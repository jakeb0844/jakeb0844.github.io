import { XMLParser } from 'fast-xml-parser';

const RSS_URL = 'https://www.wowhead.com/news/rss/all';
const MAX_ITEMS = 6;

function decode(text) {
  if (!text) return '';
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

export const load = async () => {
  try {
    const response = await fetch(RSS_URL, {
      headers: { accept: 'application/rss+xml, text/xml, */*' },
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const xml = await response.text();
    const parser = new XMLParser();
    const result = parser.parse(xml);

    const items = result.rss?.channel?.item || [];
    const newsItems = items
      .slice(0, MAX_ITEMS)
      .map(item => ({
        title: decode(item.title || ''),
        link: (item.link || '').trim(),
        pubDate: item.pubDate ? new Date(item.pubDate).toISOString() : '',
        description: item.description || '',
        category: item.category || '',
      }));

    return {
      newsItems
    };
  } catch (error) {
    console.error('Failed to fetch RSS feed:', error);
    return {
      newsItems: [],
      error: 'Failed to load news feed'
    };
  }
};

