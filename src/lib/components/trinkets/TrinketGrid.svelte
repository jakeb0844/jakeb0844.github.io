<script>
  // @ts-nocheck
  import { createEventDispatcher } from "svelte";

  export let filteredTrinkets = [];
  export let selectedTrinket = null;

  const dispatch = createEventDispatcher();

  function choose(t) {
    dispatch("selectTrinket", t);
  }
</script>

<div class="flex flex-wrap gap-4 justify-center mx-auto max-w-6xl">
  {#each filteredTrinkets as t ((t.name || "").toLowerCase())}
    <button
      class="spec-icon-wrapper relative w-12 h-12 rounded-lg overflow-hidden transition-all duration-200 {selectedTrinket &&
      (t.name || '').toLowerCase() === (selectedTrinket.name || '').toLowerCase()
        ? 'ring-2 ring-yellow-400 scale-110'
        : 'opacity-75 hover:opacity-100'}"
      title={t.name}
      on:click={() => choose(t)}
      style="background-image: url({t.iconUrl}); background-size: cover; background-position: center;"
    >
      {#if !t.iconUrl}
        <div class="flex absolute inset-0 justify-center items-center bg-black/30 text-white/50">?</div>
      {/if}
    </button>
  {/each}
  
</div>


