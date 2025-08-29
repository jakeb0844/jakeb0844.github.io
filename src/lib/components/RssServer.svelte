<script>
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
</script>

<div class="w-full">
	<h2 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
		{title}
	</h2>
	{#if items && items.length}
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
			{#each items as item}
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
					</div>
				</a>
			{/each}
		</div>
		<div class="mt-4">
			<a
				class="text-xs font-semibold text-blue-700 line-clamp-2 hover:underline dark:text-blue-400"
				href="https://www.wowhead.com/news"
				target="_blank">View all &roarr;</a
			>
		</div>
	{:else}
		<div class="text-gray-600 dark:text-gray-300">No news available.</div>
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
</style>
