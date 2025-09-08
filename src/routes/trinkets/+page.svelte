<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import TrinketGrid from '$lib/components/trinkets/TrinketGrid.svelte';
	import TrinketDetails from '$lib/components/trinkets/TrinketDetails.svelte';

	export let data;
	const trinketData = data.trinketData;

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

	$: filteredTrinkets = allTrinkets;

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
			Browse and compare trinkets at a glance. Each icon below represents
			an available trinket—click one to see how it ranks across specs and
			tiers. As new patches and balance changes are released, the list will
			be updated so you always have the most accurate view of what’s strong
			right now.
		</p>
	</div>

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
</div>
