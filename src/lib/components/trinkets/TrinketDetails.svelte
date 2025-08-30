<script>
	// @ts-nocheck
	import { createEventDispatcher } from 'svelte';
	import SpecIcon from '$lib/components/SpecIcon.svelte';

	export let selectedTrinket = null;
	export let trinketTierResults = null;
	export let tiers = [];
	export let tierColors = {};

	const dispatch = createEventDispatcher();
</script>

{#if selectedTrinket}
	<div class="p-4 space-y-8 rounded-lg backdrop-blur-sm bg-wow-parchment/90">
		<div class="flex gap-3 items-center mb-6">
      <h2 class="text-2xl font-bold leading-tight md:text-3xl text-wow-navy">{selectedTrinket.name}</h2>

		</div>
		{#if trinketTierResults}
			{#each tiers as tier}
				<div class="mb-4">
					<h3
						class="text-xl font-semibold drop-shadow-md border-b-2 border-current pb-1 mb-2 {tierColors[
							tier
						]}"
					>
						<span class="bg-[currentColor]/10 px-2 py-0.5 rounded"
							>{tier.toUpperCase()} Tier</span
						>
					</h3>
					{#if trinketTierResults[tier].length}
						<div class="flex flex-wrap gap-2">
							{#each trinketTierResults[tier] as s}
								<SpecIcon
									className={s.className}
									specName={s.specName}
									selected={false}
                  dimUnselected={false}
								/>
							{/each}
						</div>
					{:else}
						<p class="text-gray-400">No specs</p>
					{/if}
				</div>
			{/each}
		{/if}
	</div>
{/if}
