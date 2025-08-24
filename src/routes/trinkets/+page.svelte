<script>
	import { onMount } from 'svelte';
	import SpecIcon from '$lib/components/SpecIcon.svelte';
	import { classes } from '$lib/data/classes';

	/** @type {import('./$types').PageData} */
	export let data;
	const trinketData = data.trinketData;

	let selectedSpec = '';
	let currentTierList = null;
	let searchTerm = '';

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

	$: if (selectedSpec) {
		console.log(selectedSpec);
		currentTierList =
			trinketData.find(
				(spec) => `${spec.class} ${spec.name}` === selectedSpec
			)?.tierList ?? null;
	}

	const tiers = ['s', 'a', 'b', 'c', 'd', 'f'];
	const tierColors = {
		s: 'text-yellow-400',
		a: 'text-purple-400',
		b: 'text-blue-400',
		c: 'text-green-400',
		d: 'text-orange-400',
		f: 'text-red-400',
	};

	onMount(() => {
		// Initialize Wowhead tooltips
		const script = document.createElement('script');
		script.src = 'https://wow.zamimg.com/widgets/power.js';
		document.head.appendChild(script);
	});

	function refreshWowheadTooltips() {
		if (window.$WowheadPower) {
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
		<div class="relative max-w-xl mx-auto mb-4">
			<input
				type="text"
				placeholder="Search specs..."
				bind:value={searchTerm}
				class="w-full p-2 pl-8 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
			/>
		</div>

		<div class="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
			{#each filteredSpecs as spec (`${spec.className}-${spec.specName}`)}
				<SpecIcon
					className={spec.className}
					specName={spec.specName}
					selected={selectedSpec === spec.specName}
					onClick={() =>
						selectSpec(`${spec.className} ${spec.specName}`)}
				/>
			{/each}
		</div>
	</div>

	{#if currentTierList}
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
	{:else if selectedSpec}
		<p class="text-center text-gray-400">
			No tier list data available for {selectedSpec}
		</p>
	{:else}
		<p class="text-center text-gray-400">
			Select a spec to view its trinket tier list
		</p>
	{/if}
</div>
