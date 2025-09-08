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

	// Sliding underline indicator + keyboard a11y
	import { onMount, tick } from 'svelte';
	let tabsContainer;
	/** @type {Array<HTMLButtonElement>} */
	let tabButtons = [];
	let indicatorLeft = 0;
	let indicatorWidth = 0;

	function updateIndicator() {
		if (!tabsContainer || !selectedKey) return;
		const idx = tabKeys.indexOf(selectedKey);
		const btn = tabButtons[idx];
		if (!btn) return;
		const containerRect = tabsContainer.getBoundingClientRect();
		const btnRect = btn.getBoundingClientRect();
		indicatorLeft = btnRect.left - containerRect.left;
		indicatorWidth = btnRect.width;
	}

	onMount(() => {
		updateIndicator();
		const handler = () => updateIndicator();
		window.addEventListener('resize', handler);
		return () => window.removeEventListener('resize', handler);
	});

	$: if (selectedKey) {
		tick().then(updateIndicator);
	}

	function handleTabKeydown(event, idx) {
		const { key } = event;
		if (key !== 'ArrowLeft' && key !== 'ArrowRight') return;
		event.preventDefault();
		const i = idx + (key === 'ArrowRight' ? 1 : -1);
		const clamped = (i + tabKeys.length) % tabKeys.length;
		const nextKey = tabKeys[clamped];
		selectedKey = nextKey;
		tick().then(() => {
			const btn = tabButtons[clamped];
			btn && btn.focus();
		});
	}
</script>

<ul
	bind:this={tabsContainer}
	role="tablist"
	class="flex relative flex-wrap gap-6 justify-center items-center mx-auto max-w-2xl text-sm font-medium text-center border-b text-wow-navy/80 border-wow-gold/20 dark:border-gray-700 dark:text-gray-300"
>
	{#each tabKeys as key, idx}
		<li class="me-2">
			<button
				type="button"
				bind:this={tabButtons[idx]}
				role="tab"
				aria-selected={selectedKey === key}
				tabindex={selectedKey === key ? 0 : -1}
				class="inline-flex items-center px-2 py-2 text-xs uppercase tracking-wide border-b-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-wow-gold/50 rounded-sm {selectedKey === key ? 'text-wow-navy border-wow-gold' : 'text-wow-navy/70 border-transparent hover:text-wow-navy hover:border-wow-gold/50'}"
				on:click={() => (selectedKey = key)}
				on:keydown={(e) => handleTabKeydown(e, idx)}
			>
				{capitalizeFirst(key)}
			</button>
		</li>
	{/each}
	<div
		class="pointer-events-none absolute bottom-[-1px] h-[2px] bg-wow-gold transition-all duration-300"
		style={`left:${indicatorLeft}px;width:${indicatorWidth}px;`}
	/>
</ul>

{#if selectedKey}
	<div class="mx-auto mt-4 max-w-2xl">
		<div class="grid grid-cols-[110px_1fr_160px] items-center px-3 py-2 text-[12px] font-semibold tracking-wide text-left uppercase rounded-t-md text-wow-navy bg-wow-offwhite/80 border border-wow-gold/20 border-b-0">
			<div>Slot</div>
			<div>BiS Item</div>
			<div>Source</div>
		</div>
		<div class="overflow-hidden rounded-b-md border border-t-0 border-wow-gold/20">
			{#each bisTabs[selectedKey] as row}
				<div class="group grid grid-cols-[110px_1fr_160px] items-center px-3 py-2 text-[13px] odd:bg-wow-parchment/60 even:bg-wow-offwhite/50 hover:bg-wow-parchment/80 transition-colors border-l-2 border-transparent hover:border-wow-gold dark:odd:bg-gray-800 dark:even:bg-gray-700">
					<div class="font-medium text-wow-navy/90 dark:text-gray-200">{row.title}</div>
					<div class="flex gap-2 items-center text-wow-teal">
						{#if row.item?.iconUrl}
							<img src={row.item.iconUrl} alt={row.item?.name} class="w-5 h-5 rounded-sm ring-1 transition ring-wow-gold/20 group-hover:ring-wow-gold/50" />
						{/if}
						{#if row.item?.href}
							<a
								href={row.item.href}
								target="_blank"
								rel="noopener"
								class="hover:underline hover:text-wow-navy"
							>
								{row.item?.name}
							</a>
						{:else}
							<span>{row.item?.name}</span>
						{/if}
					</div>
					<div class="text-wow-navy dark:text-gray-200">
						{#if row.source?.href}
							<a href={row.source.href} target="_blank" rel="noopener" class="text-wow-teal hover:text-wow-navy hover:underline">{row.source.title}</a>
						{:else}
							<span>{row.source?.title}</span>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
{/if}
