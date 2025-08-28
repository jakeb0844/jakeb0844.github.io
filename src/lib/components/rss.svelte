<script>
	import { onMount } from 'svelte';

	/**
	 * @typedef {Object} NewsItem
	 * @property {string} title
	 * @property {string} link
	 * @property {string} pubDate
	 * @property {string} description
	 */

	/** @type {NewsItem[]} */
	export let items = [];
	export let title = 'Latest Wowhead News';

	const RSS_URL = 'https://www.wowhead.com/news/rss/all';
	const CORS_PROXIES = [
		'https://api.allorigins.win/raw?url=',
		'https://cors-proxy.htmldriven.com/?url=',
		'https://corsproxy.io/?',
	];
	const MAX_ITEMS = 6;
	const MAX_RETRIES = 3;
	const RETRY_DELAY = 1000; // 1 second

	/** @type {NewsItem[]} */
	let clientItems = items;
	let hasLoaded = false;
	let isRetrying = false;
	let retryCount = 0;
	let error = '';
	/** @type {number|undefined} */
	let refreshInterval;

	/**
	 * @param {string} xmlText
	 * @returns {NewsItem[]}
	 */
	function parseRss(xmlText) {
		if (!xmlText) return [];
		const parser = new DOMParser();
		const doc = parser.parseFromString(xmlText, 'application/xml');
		if (doc.querySelector('parsererror')) return [];

		return Array.from(doc.querySelectorAll('item'))
			.map((node) => ({
				title: decode(node.querySelector('title')?.textContent || ''),
				link: (node.querySelector('link')?.textContent || '').trim(),
				pubDate: node.querySelector('pubDate')?.textContent
					? new Date(
							node.querySelector('pubDate')?.textContent || ''
					  ).toISOString()
					: '',
				description:
					node.querySelector('description')?.textContent || '',
			}))
			.slice(0, MAX_ITEMS);
	}

	/**
	 * @param {string} text
	 * @returns {string}
	 */
	function decode(text) {
		if (!text) return '';
		return text
			.replace(/&amp;/g, '&')
			.replace(/&lt;/g, '<')
			.replace(/&gt;/g, '>')
			.replace(/&quot;/g, '"')
			.replace(/&#39;/g, "'");
	}

	/**
	 * @param {string} proxyUrl
	 * @returns {Promise<NewsItem[]>}
	 */
	async function fetchWithProxy(proxyUrl) {
		const response = await fetch(proxyUrl + encodeURIComponent(RSS_URL), {
			headers: { accept: 'application/rss+xml, text/xml, */*' },
			cache: 'no-store',
		});

		if (!response.ok) throw new Error(`HTTP ${response.status}`);

		// Handle different proxy response formats
		let xml;
		const contentType = response.headers.get('content-type') || '';
		if (contentType.includes('application/json')) {
			const data = await response.json();
			xml = data.contents || data.data || data.result;
		} else {
			xml = await response.text();
		}

		if (!xml) throw new Error('Empty response');
		return parseRss(xml);
	}

	/**
	 * @param {number} ms
	 * @returns {Promise<void>}
	 */
	function sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	async function fetchClientRss() {
		error = '';
		isRetrying = false;
		retryCount = 0;

		for (const proxy of CORS_PROXIES) {
			try {
				const parsed = await fetchWithProxy(proxy);
				if (parsed.length) {
					clientItems = parsed;
					hasLoaded = true;
					return;
				}
			} catch (e) {
				retryCount++;
				if (retryCount < MAX_RETRIES) {
					isRetrying = true;
					await sleep(RETRY_DELAY);
					continue;
				}
				error =
					e instanceof Error ? e.message : 'Failed to load news feed';
			}
		}

		hasLoaded = true;
	}

	onMount(() => {
		fetchClientRss();
		refreshInterval = setInterval(fetchClientRss, 60000);
		return () => clearInterval(refreshInterval);
	});
</script>

<div class="w-full">
	<h2 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
		{title}
	</h2>
	{#if clientItems && clientItems.length}
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
			{#each clientItems as item}
				<a
					href={item.link}
					rel="noopener noreferrer"
					target="_blank"
					class="block h-full transition-transform hover:-translate-y-1"
				>
					<div
						class="flex flex-col p-3 h-full rounded-lg border border-gray-200 transition-colors dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500"
					>
						<div
							style="font-size: 12px;"
							class="text-base font-semibold text-blue-700 line-clamp-2 dark:text-blue-400"
						>{item.title}</div>
						{#if item.pubDate}
							<div
								style="font-size: 10px;"
								class="mt-1 text-gray-500"
							>
								{new Date(item.pubDate).toLocaleString()}
							</div>
						{/if}
						<!-- {#if item.description}
				<div class="mt-2 line-clamp-3">{@html item.description}</div>
			{/if} -->
					</div>
				</a>
			{/each}
		</div>
	{:else if !hasLoaded}
		<div class="text-gray-600 dark:text-gray-300">
			Loading news…
			{#if isRetrying}
				<span class="ml-1">Retrying ({retryCount}/{MAX_RETRIES})</span>
			{/if}
		</div>
	{:else if error}
		<div class="text-red-600 dark:text-red-400">{error}</div>
	{:else}
		<div class="text-gray-600 dark:text-gray-300">No news available.</div>
	{/if}
	{#if clientItems && clientItems.length}
		<div class="mt-4">
			<a
				class="text-xs font-semibold text-blue-700 line-clamp-2 hover:underline dark:text-blue-400"
				href="https://www.wowhead.com/news"
				target="_blank">View all &roarr;</a
			>
		</div>
	{/if}
</div>

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		line-clamp: 2;
		overflow: hidden;
	}
	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		line-clamp: 3;
		overflow: hidden;
	}
</style>
