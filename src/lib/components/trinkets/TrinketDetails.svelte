<script>
  // @ts-nocheck
  import { createEventDispatcher } from "svelte";
  import SpecIcon from "$lib/components/SpecIcon.svelte";

  export let selectedTrinket = null;
  export let trinketTierResults = null;
  export let tiers = [];
  export let tierColors = {};

  const dispatch = createEventDispatcher();
</script>

{#if selectedTrinket}
  <div class="mx-auto mt-6 max-w-3xl">
    <div class="flex gap-3 items-center mb-6">
      <img src={selectedTrinket.iconUrl} alt={selectedTrinket.name} class="w-10 h-10" />
      <a href={selectedTrinket.href} class="text-wow-navy hover:text-wow-teal">{selectedTrinket.name}</a>
      <button
        class="ml-auto text-sm text-wow-navy/70 hover:text-wow-navy"
        on:click={() => dispatch("clear")}
      >
        Clear
      </button>
    </div>
    {#if trinketTierResults}
      {#each tiers as tier}
        <div class="mb-4">
          <h3 class="text-xl font-semibold drop-shadow-md border-b-2 border-current pb-1 mb-2 {tierColors[tier]}">
            <span class="bg-[currentColor]/10 px-2 py-0.5 rounded">{tier.toUpperCase()} Tier</span>
          </h3>
          {#if trinketTierResults[tier].length}
            <div class="flex flex-wrap gap-2">
              {#each trinketTierResults[tier] as s}
                <SpecIcon className={s.className} specName={s.specName} selected={false} />
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


