<script>
	// @ts-nocheck
	export let bisTabs;
	/**
     * {
          "title": "Head",
          "item": {
            "id": "237628",
            "iconUrl": "https://wow.zamimg.com/images/wow/icons/tiny/inv_helm_plate_raiddeathknightethereal_d_01.gif",
            "href": "https://www.wowhead.com/ptr-2/item=237628/hollow-sentinels-stonemask?bonus=7981:12052:5877:12361:12053:10878&gems=213743",
            "name": "Hollow Sentinel's Stonemask"
          },
          "source": {
            "title": "Catalyst",
            "href": "https://www.wowhead.com/guide/catalyst-the-war-within-crafting-tier-set"
          }
        },
    */
	let tabKeys = [];
	let selectedKey = '';

	$: tabKeys = Object.keys(bisTabs || {});
	$: {
		if (!tabKeys || tabKeys.length === 0) {
			selectedKey = '';
		} else if (!selectedKey || !tabKeys.includes(selectedKey)) {
			selectedKey = tabKeys[0];
		}
	}

	function capitalizeFirst(str) {
		if (!str) return '';
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
</script>

<ul
	class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
>
	{#each tabKeys as key}
		<li class="me-2">
			<button
				type="button"
				class="inline-block p-4 rounded-t-lg {selectedKey === key ? 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500' : 'hover:text-gray-600'}"
				on:click={() => (selectedKey = key)}
			>
				{capitalizeFirst(key)}
			</button>
		</li>
	{/each}
</ul>

{#if selectedKey}
	<div class="mt-4">
		<div class="grid grid-cols-3 gap-4 items-center px-2 py-2 text-xs font-semibold tracking-wide text-left text-gray-600 uppercase">
			<div>Slot</div>
			<div>Item</div>
			<div>Source</div>
		</div>
		<div class="divide-y divide-gray-200 dark:divide-gray-700">
			{#each bisTabs[selectedKey] as row}
				<div class="grid grid-cols-3 gap-4 items-center px-2 py-3">
					<div class="text-gray-800 dark:text-gray-200">{row.title}</div>
					<div class="flex gap-2 items-center text-blue-700">
						{#if row.item?.iconUrl}
							<img src={row.item.iconUrl} alt={row.item?.name} class="w-6 h-6 rounded-sm" />
						{/if}
						{#if row.item?.href}
							<a
								href={row.item.href}
								target="_blank"
								rel="noopener"
								class="hover:underline"
							>
								{row.item?.name}
							</a>
						{:else}
							<span>{row.item?.name}</span>
						{/if}
					</div>
					<div class="text-gray-800 dark:text-gray-200">
						{#if row.source?.href}
							<a href={row.source.href} target="_blank" rel="noopener" class="text-blue-700 hover:underline">{row.source.title}</a>
						{:else}
							<span>{row.source?.title}</span>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
{/if}
