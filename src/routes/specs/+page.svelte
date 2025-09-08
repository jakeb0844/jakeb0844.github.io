<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import SearchControls from '$lib/components/trinkets/SearchControls.svelte';
	import SpecGrid from '$lib/components/trinkets/SpecGrid.svelte';
	import TrinketGrid from '$lib/components/trinkets/TrinketGrid.svelte';
	import TrinketDetails from '$lib/components/trinkets/TrinketDetails.svelte';
	import SpecTierList from '$lib/components/trinkets/SpecTierList.svelte';
	import { classes } from '$lib/data/classes';
	import Stats from '$lib/components/stats.svelte';
	import BisTabs from '$lib/components/bisTabs.svelte';
	export let data;
	const specData = data;
	let selectedSpec = '';
	let currentTierList = null;

	// Derive spec-specific data when a spec is selected
	$: selectedStats =
		specData.stats.find((s) => `${s.class} ${s.name}` === selectedSpec)
			?.stats ?? [];
	$: selectedBisTabs =
		specData.bisTabs.find((b) => `${b.class} ${b.name}` === selectedSpec)
			?.tabs ?? {};
	//let searchTerm = '';
	//let mode = 'spec'; // 'spec' | 'trinket'
	//let selectedTrinket = null; // { id, name, iconUrl, href }

	// Build a unique list of all trinkets across all specs
	const allTrinketsMap = new Map();
	for (const spec of specData.trinketData) {
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
		`${spec.className} ${spec.specName}`.toLowerCase()
	);

	const filteredTrinkets = allTrinkets;

	let initializedFromQuery = false;
	// Initialize from query param via $page store (one-time)
	$: if (!initializedFromQuery) {
		try {
			const q = $page?.url?.searchParams?.get('spec');
			if (q) {
				const label = decodeURIComponent(q.replace(/\+/g, ' '));
				if (label) {
					selectedSpec = label;
					initializedFromQuery = true;
				}
			}
		} catch (e) {}
	}

	// If searching specs and the filter yields exactly one match, auto-select it
	$: if (selectedSpec) {
		if (filteredSpecs && filteredSpecs.length === 1) {
			const only = filteredSpecs[0];
			const label = `${only.className} ${only.specName}`;
			if (selectedSpec !== label) selectedSpec = label;
		}
	}

	$: if (selectedSpec) {
		currentTierList =
			specData.trinketData.find(
				(spec) => `${spec.class} ${spec.name}` === selectedSpec
			)?.tierList ?? null;
	}

	const tiers = [
		's+',
		's',
		's-',
		'a+',
		'a',
		'a-',
		'b+',
		'b',
		'b-',
		'c+',
		'c',
		'c-',
		'd+',
		'd',
		'd-',
		'f+',
		'f',
		'f-',
	];
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

	function debounce(fn, wait) {
		let t;
		return (...args) => {
			clearTimeout(t);
			t = setTimeout(() => fn(...args), wait);
		};
	}

	onMount(() => {
		// Load Wowhead tooltip script once and initialize selected spec from URL/localStorage
		if (typeof window !== 'undefined') {
			const existing = document.querySelector(
				'script[src="https://wow.zamimg.com/widgets/power.js"]'
			);
			if (!window.$WowheadPower && !existing) {
				const script = document.createElement('script');
				script.src = 'https://wow.zamimg.com/widgets/power.js';
				document.head.appendChild(script);
			}

			try {
				const url = new URL(window.location.href);
				const specParam = url.searchParams.get('spec');
				const initial = specParam
					? decodeURIComponent(specParam.replace(/\+/g, ' '))
					: localStorage.getItem('selectedSpec') || '';
				if (initial) selectedSpec = initial;
			} catch (e) {}
		}
	});

	function refreshWowheadTooltips() {
		if (typeof window !== 'undefined' && window.$WowheadPower) {
			window.$WowheadPower.refreshLinks();
		}
	}
	const refreshWowheadTooltipsDebounced = debounce(() => refreshWowheadTooltips(), 150);

	$: if (currentTierList) {
		// Refresh tooltips whenever the tier list changes
		refreshWowheadTooltipsDebounced();
	}

	// Sync selectedSpec to URL and localStorage
	$: if (typeof window !== 'undefined') {
		try {
			const url = new URL(window.location.href);
			if (selectedSpec) {
				url.searchParams.set('spec', selectedSpec);
				history.replaceState(null, '', url);
				try { localStorage.setItem('selectedSpec', selectedSpec); } catch {}
			} else {
				url.searchParams.delete('spec');
				history.replaceState(null, '', url);
				try { localStorage.removeItem('selectedSpec'); } catch {}
			}
		} catch (e) {}
	}

	function selectSpec(specName) {
		selectedSpec = selectedSpec === specName ? '' : specName;
	}

	function handleSelectSpec(event) {
		const detail = event.detail;
		const label = typeof detail === 'string' ? detail : detail?.label;
		if (!label) return;
		selectedSpec = label;
		//searchTerm = label;
	}
</script>

<svelte:head>
	<title>
		{selectedSpec
			? `${selectedSpec} - Best in Slot & Trinket Tier List`
			: 'Specs - Trinkets, BiS & Tier Lists'}
	</title>
	<meta
		name="description"
		content={selectedSpec
			? `BiS gear, stat priorities, and trinket tier list for ${selectedSpec}.`
			: 'Browse specs to see BiS gear, stat priorities, and trinket tier lists.'}
	/>
	<meta
		property="og:title"
		content={selectedSpec ? `${selectedSpec} - BiS & Trinkets` : 'Specs - BiS & Trinkets'}
	/>
	<meta
		property="og:description"
		content={selectedSpec ? `BiS gear and trinket rankings for ${selectedSpec}.` : 'Compare specs and view trinket rankings.'}
	/>
</svelte:head>

<div class="container px-4 py-8 mx-auto">
	<div>
		<h1
			class="mb-8 text-4xl font-bold text-center text-wow-navy"
			style="font-family: Cinzel, serif;"
		>
			Specs
		</h1>
		<p class="mb-8 text-wow-navy" style="font-family: Cinzel, serif;">
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

	<div class="">
		<SpecGrid
			{filteredSpecs}
			{selectedSpec}
			on:selectSpec={(e) => selectSpec(e.detail)}
		/>
		{#if selectedSpec}
			<div
				class="p-8 mt-8 space-y-8 rounded-lg backdrop-blur-sm bg-wow-parchment/90"
			>
				<h2 class="mb-2 text-4xl font-bold text-wow-navy">
					{selectedSpec}
				</h2>

				<div class="pl-4">
					<Stats stats={selectedStats} />

					<div class="mt-8">
						<h3 class="text-2xl font-bold text-wow-navy">
							Best in Slot Gear
						</h3>

						<BisTabs bisTabs={selectedBisTabs} />
					</div>
				</div>
				{#if hasTierItems}
					<SpecTierList
						{currentTierList}
						{tiers}
						{tierColors}
						specLabel={'Trinket Tier List'}
					/>
				{:else if selectedSpec}
					<p class="text-center">
						No tier list data available for {selectedSpec}
					</p>
				{/if}
			</div>
		{/if}
	</div>
</div>
