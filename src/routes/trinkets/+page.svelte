<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import SpecIcon from '$lib/components/SpecIcon.svelte';
	import { classes } from '$lib/data/classes';

	export let data;
	const trinketData = data.trinketData;

	let selectedSpec = '';
	let currentTierList = null;
	let searchTerm = '';
	let showSpecs = false;
	let mode = 'spec'; // 'spec' | 'trinket'
	let selectedTrinket = null; // { id, name, iconUrl, href }
	let dropdownOpen = false;

	// Build a unique list of all trinkets across all specs
	const allTrinketsMap = new Map();
	for (const spec of trinketData) {
		if (!spec.tierList) continue;
		for (const tierKey of Object.keys(spec.tierList)) {
			for (const t of spec.tierList[tierKey] || []) {
				const key = (t.name || '').toLowerCase();
				if (!allTrinketsMap.has(key)) allTrinketsMap.set(key, t);
			}
		}
	}
	const allTrinkets = Array.from(allTrinketsMap.values());

	// Flatten specs array for easier filtering
	const specs = classes.flatMap((c) =>
		c.specs.map((s) => ({
			className: c.name,
			specName: s.name,
			url: s.url,
		}))
	);

	$: filteredSpecs = specs.filter((spec) =>
		`${spec.className} ${spec.specName}`
			.toLowerCase()
			.includes(searchTerm.toLowerCase())
	);

	$: filteredTrinkets = allTrinkets.filter((t) =>
		(t.name || '').toLowerCase().includes(searchTerm.toLowerCase())
	);

	// If searching specs and the filter yields exactly one match, auto-select it
	$: if (mode === 'spec') {
		if (searchTerm && filteredSpecs && filteredSpecs.length === 1) {
			const only = filteredSpecs[0];
			const label = `${only.className} ${only.specName}`;
			if (selectedSpec !== label) selectedSpec = label;
		}
	}

	$: if (selectedSpec) {
		console.log(selectedSpec);
		currentTierList =
			trinketData.find(
				(spec) => `${spec.class} ${spec.name}` === selectedSpec
			)?.tierList ?? null;
	}

	// When selecting a trinket, compute how each spec ranks it per tier
	$: trinketTierResults = (() => {
		if (!selectedTrinket) return null;
		const results = { s: [], a: [], b: [], c: [], d: [], f: [] };
		for (const spec of trinketData) {
			if (!spec.tierList) continue;
			for (const tierKey of ['s', 'a', 'b', 'c', 'd', 'f']) {
				const list = spec.tierList[tierKey] || [];
				if (
					list.some(
						(t) =>
							(t.name || '').toLowerCase() ===
							(selectedTrinket.name || '').toLowerCase()
					)
				) {
					results[tierKey].push({
						className: spec.class,
						specName: spec.name,
						label: `${spec.class} ${spec.name}`,
					});
					break;
				}
			}
		}
		return results;
	})();

	const tiers = ['s', 'a', 'b', 'c', 'd', 'f'];
	const tierColors = {
		s: 'text-yellow-400',
		a: 'text-purple-400',
		b: 'text-blue-400',
		c: 'text-green-400',
		d: 'text-orange-400',
		f: 'text-red-400',
	};

	$: hasTierItems =
		!!currentTierList &&
		tiers.some((tier) => (currentTierList[tier]?.length || 0) > 0);

	onMount(() => {
		// Initialize Wowhead tooltips
		const script = document.createElement('script');
		script.src = 'https://wow.zamimg.com/widgets/power.js';
		document.head.appendChild(script);
	});

	function refreshWowheadTooltips() {
		if (window && window.$WowheadPower) {
			window.$WowheadPower.refreshLinks();
		}
	}

	$: if (currentTierList) {
		// Refresh tooltips whenever the tier list changes
		setTimeout(refreshWowheadTooltips, 100);
	}

	function selectSpec(specName) {
		console.log('onclick', specName);
		selectedSpec = selectedSpec === specName ? '' : specName;
	}
</script>

<div class="container mx-auto px-4 py-8">
	<h1 class="text-4xl font-bold mb-8 text-center">WoW Trinket Tier List</h1>

	<div class="mb-8">
		<form
			style="position:relative;"
			class="max-w-lg mx-auto"
			on:submit|preventDefault
			autocomplete="off"
		>
			<div class="flex">
				<label
					for="search-dropdown"
					class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
					>Search</label
				>
				<div class="relative">
					<button
						id="dropdown-button"
						class="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
						type="button"
						on:click={() => (dropdownOpen = !dropdownOpen)}
					>
						{mode === 'spec' ? 'Specs' : 'Trinkets'}
						<svg
							class="w-2.5 h-2.5 ms-2.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 10 6"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m1 1 4 4 4-4"
							/>
						</svg>
					</button>
					{#if dropdownOpen}
						<div
							id="dropdown"
							class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 absolute mt-1"
						>
							<ul
								class="py-2 text-sm text-gray-700 dark:text-gray-200"
								aria-labelledby="dropdown-button"
							>
								<li>
									<button
										type="button"
										class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										on:click={() => {
											mode = 'spec';
											selectedTrinket = null;
											searchTerm = '';
											dropdownOpen = false;
										}}>Specs</button
									>
								</li>
								<li>
									<button
										type="button"
										class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										on:click={() => {
											mode = 'trinket';
											selectedSpec = '';
											currentTierList = null;
											searchTerm = '';
											dropdownOpen = false;
										}}>Trinkets</button
									>
								</li>
							</ul>
						</div>
					{/if}
				</div>
				<div class="relative w-full">
					<input
						type="search"
						id="search-dropdown"
						class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
						placeholder={mode === 'spec'
							? 'Search specs...'
							: 'Search trinkets...'}
						bind:value={searchTerm}
						on:input={() => {
							if (mode === 'spec' && selectedSpec) {
								selectedSpec = '';
								currentTierList = null;
							}
							if (mode === 'trinket' && selectedTrinket) {
								selectedTrinket = null;
							}
						}}
					/>
					<button
						type="submit"
						class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						<svg
							class="w-4 h-4"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
						<span class="sr-only">Search</span>
					</button>
				</div>
			</div>
			{#if mode === 'spec' && searchTerm && !selectedSpec}
				<div
					style="position:absolute; z-index: 1000; background-color: white; overflow-y: auto; max-height: 300px;"
					class="w-full max-w-lg mx-auto bg-white/5 border border-black/20 rounded-lg p-2 shadow-sm"
				>
					{#each filteredSpecs as s}
						<button
							class="w-full text-left hover:bg-white/10 transition-colors p-2 rounded hover:bg-black/10"
							on:click={() => {
								selectedSpec = `${s.className} ${s.specName}`;
								searchTerm = `${s.className} ${s.specName}`;
							}}
						>
							{s.className}
							{s.specName}
						</button>
					{/each}
					{#if filteredSpecs.length === 0}
						<p class="text-center text-gray-400">
							No specs match that search.
						</p>
					{/if}
				</div>
			{/if}
			{#if searchTerm && !selectedTrinket}
            <div
            style="position:absolute; z-index: 1000; background-color: white; overflow-y: auto; max-height: 300px;"
            class="w-full max-w-lg mx-auto bg-white/5 border border-black/20 rounded-lg p-2 shadow-sm"
        >
					{#each filteredTrinkets as t}
						<button
                        class="flex gap-1 w-full text-left hover:bg-white/10 transition-colors p-2 rounded hover:bg-black/10"
                        on:click={() => {
								selectedTrinket = t;
								searchTerm = t.name || '';
							}}
						>
							{#if t.iconUrl}
								<img
									src={t.iconUrl}
									alt={t.name}
									class="w-6 h-6"
								/>
							{/if}
							<span>{t.name}</span>
						</button>
					{/each}
					{#if filteredTrinkets.length === 0}
						<p class="text-center text-gray-400">
							No trinkets match that search.
						</p>
					{/if}
				</div>
			{/if}
		</form>
	</div>

	{#if mode === 'spec'}
		<!-- <div class="text-center mb-4">
				<button
					class="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
					on:click={() => (showSpecs = !showSpecs)}
				>
					{showSpecs ? 'Hide spec icons' : 'Show spec icons'}
				</button>
			</div> -->
	{/if}

	{#if mode === 'spec'}
		<div class="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
			{#each filteredSpecs as spec (`${spec.className}-${spec.specName}`)}
				<SpecIcon
					className={spec.className}
					specName={spec.specName}
					selected={selectedSpec ===
						`${spec.className} ${spec.specName}`}
					onClick={() =>
						selectSpec(`${spec.className} ${spec.specName}`)}
				/>
			{/each}
		</div>
	{/if}

	{#if mode === 'trinket'}
		<div class="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
			{#each filteredTrinkets as t ((t.name || '').toLowerCase())}
				<button
					class="spec-icon-wrapper relative w-12 h-12 rounded-lg overflow-hidden transition-all duration-200 {selectedTrinket &&
					(t.name || '').toLowerCase() ===
						(selectedTrinket.name || '').toLowerCase()
						? 'ring-2 ring-yellow-400 scale-110'
						: 'opacity-75 hover:opacity-100'}"
					title={t.name}
					on:click={() => {
						selectedTrinket = t;
						searchTerm = t.name || '';
					}}
					style="background-image: url({t.iconUrl}); background-size: cover; background-position: center;"
				>
					{#if !t.iconUrl}
						<div
							class="absolute inset-0 bg-black/30 flex items-center justify-center text-white/50"
						>
							?
						</div>
					{/if}
				</button>
			{/each}
		</div>

		{#if selectedTrinket}
			<div class="max-w-3xl mx-auto mt-6">
				<div class="flex items-center gap-3 mb-6">
					<img
						src={selectedTrinket.iconUrl}
						alt={selectedTrinket.name}
						class="w-10 h-10"
					/>
					<a
						href={selectedTrinket.href}
						class="text-blue-400 hover:text-blue-300"
						>{selectedTrinket.name}</a
					>
					<button
						class="ml-auto text-sm text-gray-300 hover:text-white"
						on:click={() => {
							selectedTrinket = null;
						}}>Clear</button
					>
				</div>
				{#if trinketTierResults}
					{#each tiers as tier}
						<div class="mb-4">
							<h3
								class="text-xl font-semibold mb-2 {tierColors[
									tier
								]}"
							>
								{tier.toUpperCase()} Tier
							</h3>
							{#if trinketTierResults[tier].length}
								<ul class="list-disc list-inside space-y-1">
									{#each trinketTierResults[tier] as s}
										<li>{s.label}</li>
									{/each}
								</ul>
							{:else}
								<p class="text-gray-400">No specs</p>
							{/if}
						</div>
					{/each}
				{/if}
			</div>
		{/if}
	{/if}

	{#if mode === 'spec' && hasTierItems}
		<div class="space-y-8">
			{#each tiers as tier}
				{#if currentTierList[tier]?.length}
					<div class="tier-section">
						<h2 class="text-2xl font-bold mb-4 {tierColors[tier]}">
							{tier.toUpperCase()} Tier
						</h2>
						<div
							class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
						>
							{#each currentTierList[tier] || [] as trinket}
								<div
									class="trinket-card bg-white/5 backdrop-blur-sm p-4 rounded-lg flex items-center space-x-4 hover:bg-white/10 transition-colors"
								>
									<img
										src={trinket.iconUrl}
										alt={trinket.name}
										class="w-12 h-12"
									/>
									<a
										href={trinket.href}
										data-wowhead={`item=${trinket.id}`}
										class="text-blue-400 hover:text-blue-300"
									>
										{trinket.name}
									</a>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			{/each}
		</div>
	{:else if mode === 'spec' && selectedSpec}
		<p class="text-center">
			No tier list data available for {selectedSpec}
		</p>
	{/if}
</div>
