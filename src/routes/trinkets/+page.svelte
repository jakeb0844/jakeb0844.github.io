<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import SearchControls from '$lib/components/trinkets/SearchControls.svelte';
	import SpecGrid from '$lib/components/trinkets/SpecGrid.svelte';
	import TrinketGrid from '$lib/components/trinkets/TrinketGrid.svelte';
	import TrinketDetails from '$lib/components/trinkets/TrinketDetails.svelte';
	import SpecTierList from '$lib/components/trinkets/SpecTierList.svelte';
	import { classes } from '$lib/data/classes';

	export let data;
	const trinketData = data.trinketData;

	let selectedSpec = '';
	let currentTierList = null;
	let searchTerm = '';
	let mode = 'spec'; // 'spec' | 'trinket'
	let selectedTrinket = null; // { id, name, iconUrl, href }

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

	const filteredTrinkets = allTrinkets;

	// $: filteredTrinkets = allTrinkets.filter((t) =>
	// 	(t.name || '').toLowerCase().includes(searchTerm.toLowerCase())
	// );

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
		const results = {};
		for (const key of tiers) results[key] = [];
		for (const spec of trinketData) {
			if (!spec.tierList) continue;
			for (const tierKey of tiers) {
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

	const tiers = ['s+', 's', 's-', 'a+', 'a', 'a-', 'b+', 'b', 'b-', 'c+', 'c', 'c-', 'd+', 'd', 'd-', 'f+', 'f', 'f-'];
	const tierColors = {
		's+': 'text-yellow-600',
		s: 'text-yellow-600',
		's-': 'text-yellow-600',
		'a+': 'text-purple-600',
		a: 'text-purple-600',
		'a-': 'text-purple-600',
		'b+': 'text-blue-600',
		b: 'text-blue-600',
		'b-': 'text-blue-600',
		'c+': 'text-green-600',
		c: 'text-green-600',
		'c-': 'text-green-600',
		'd+': 'text-orange-600',
		d: 'text-orange-600',
		'd-': 'text-orange-600',
		'f+': 'text-red-600',
		f: 'text-red-600',
		'f-': 'text-red-600',
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

	function handleSetMode(event) {
		const newMode = event.detail;
		if (newMode === 'spec') {
			mode = 'spec';
			selectedTrinket = null;
			searchTerm = '';
		} else {
			mode = 'trinket';
			selectedSpec = '';
			currentTierList = null;
			searchTerm = '';
		}
	}

	function handleUpdateSearchTerm(event) {
		const value = event.detail || '';
		// mirror previous behavior: clear selection when typing
		if (mode === 'spec' && selectedSpec) {
			selectedSpec = '';
			currentTierList = null;
		}
		if (mode === 'trinket' && selectedTrinket) {
			selectedTrinket = null;
		}
		searchTerm = value;
	}

	function handleSelectSpec(event) {
		const detail = event.detail;
		const label = typeof detail === 'string' ? detail : detail?.label;
		if (!label) return;
		selectedSpec = label;
		searchTerm = label;
	}

	function handleSelectTrinket(event) {
		const t = event.detail;
		if (!t) return;
		selectedTrinket = t;
		//searchTerm = t.name || '';
	}
</script>

<div class="container px-4 py-8 mx-auto">
	<div>
		<h1
			class="mb-8 text-4xl font-bold text-center text-wow-navy"
			style="font-family: Cinzel, serif;"
		>
			Trinket Tier List
		</h1>
		<p class="mb-8 text-wow-navy"
    style="font-family: Cinzel, serif;">
			This page is built to make browsing and comparing trinkets simple
			and visual. Use the dropdown to switch between categories, or type
			in the search bar to quickly find a specific trinket. Each icon
			above represents an available trinket—clicking or hovering over them
			highlights where they fall within the tier list below. The tier
			sections update to show how a chosen trinket compares to others,
			giving you a clear snapshot of its current standing. As new patches
			and balance changes are released, the list will be updated so you
			always have the most accurate view of what’s strong right now.
		</p>
	</div>

	<SearchControls
		{mode}
		{searchTerm}
		{selectedSpec}
		{selectedTrinket}
		{filteredSpecs}
		{filteredTrinkets}
		on:setMode={handleSetMode}
		on:updateSearchTerm={handleUpdateSearchTerm}
		on:selectSpec={handleSelectSpec}
		on:selectTrinket={handleSelectTrinket}
	/>

	{#if mode === 'spec'}
		<div class="flex flex-col gap-8">
			<SpecGrid
				{filteredSpecs}
				{selectedSpec}
				on:selectSpec={(e) => selectSpec(e.detail)}
			/>
			{#if hasTierItems}
				<SpecTierList {currentTierList} {tiers} {tierColors} specLabel={selectedSpec} />
			{:else if selectedSpec}
				<p class="text-center">
					No tier list data available for {selectedSpec}
				</p>
			{/if}
		</div>
	{/if}

	{#if mode === 'trinket'}
		<div class="flex flex-col gap-8">
			<TrinketGrid
				{filteredTrinkets}
				{selectedTrinket}
				on:selectTrinket={handleSelectTrinket}
			/>

			<TrinketDetails
				{selectedTrinket}
				{trinketTierResults}
				{tiers}
				{tierColors}
				on:clear={() => (selectedTrinket = null)}
			/>
		</div>
	{/if}
</div>
