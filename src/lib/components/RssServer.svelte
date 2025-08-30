<script>
  /**
   * @typedef {Object} NewsItem
   * @property {string} title
   * @property {string} link
   * @property {string} pubDate
   * @property {string} description
   * @property {string} [category]
   */

  /** @type {NewsItem[]} */
  export let items = [];
  export let title = "Latest Wowhead News";
</script>

<div class="w-full">
  <div class="flex gap-4 items-baseline">
    <h2
      class="mb-4 text-2xl font-bold text-gray-900 dark:text-white"
      style="font-family: Cinzel, serif;"
    >
      {title}
    </h2>

    <a
      class="px-2 py-1 text-xs font-semibold rounded border transition-colors border-wow-navy/50 text-wow-navy hover:text-wow-copper hover:bg-wow-gold/20 hover:border-wow-gold/80"
      href="https://www.wowhead.com/news"
      target="_blank">View all →</a
    >
  </div>
  {#if items && items.length}
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
      {#each items as item, i}
        <a
          href={item.link}
          rel="noopener noreferrer"
          target="_blank"
          class="block h-full rounded-lg transition-transform group hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-wow-gold/50"
        >
          <div
            class={`flex flex-col p-3 h-full rounded-lg border transition-all duration-200 ease-in-out backdrop-blur-sm hover:shadow-glow-green hover:scale-[1.02] ${
              i % 2 === 0 ? "bg-wow-navy/80" : "bg-wow-teal/80"
            } border-wow-gold/20 hover:border-wow-gold/60`}
          >
            {#if item.category}
              <span
                class="text-[10px] uppercase tracking-wide text-wow-lightgold/80"
                >{item.category}</span
              >
            {/if}

            <div
              style="font-size: 12px;"
              class="text-base font-semibold text-wow-lightgold line-clamp-2 group-hover:text-wow-offwhite"
            >
              {item.title}
            </div>
            {#if item.pubDate}
              <div style="font-size: 10px;" class="mt-1 text-wow-green">
                {new Date(item.pubDate).toLocaleString()}
              </div>
            {/if}
          </div>
        </a>
      {/each}
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
