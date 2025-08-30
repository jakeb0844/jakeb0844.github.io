<script>
	// @ts-nocheck
	export let currentTierList = null;
	export let tiers = [];
	export let tierColors = {};
</script>

{#if currentTierList}
	<div class="p-4 space-y-8 rounded-lg backdrop-blur-sm bg-wow-parchment/90">
		{#each tiers as tier}
			{#if currentTierList[tier]?.length}
				<div class="tier-section">
					<h2 class="text-2xl font-bold drop-shadow-md border-b-2 border-current pb-1 mb-4 {tierColors[tier]}">
						<span class="bg-[currentColor]/10 px-2 py-0.5 rounded">{tier.toUpperCase()} Tier</span>
					</h2>
					<div
						class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
					>
          
						{#each currentTierList[tier] || [] as trinket}
							<div
								class="flex gap-4 items-center p-4 space-x-4 trinket-card"
							>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={trinket.href}
									data-wowhead={`item=${trinket.id}`}
									class="text-wow-navy hover:text-wow-teal"
								>
									<img
										src={trinket.iconUrl}
										alt={trinket.name}
										class="w-12 h-12 rounded-md ring-1 ring-wow-gold/30"
									/>
								</a>
								<span style="margin:0;"
									>{trinket.name}</span
								>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		{/each}
	</div>
{/if}
