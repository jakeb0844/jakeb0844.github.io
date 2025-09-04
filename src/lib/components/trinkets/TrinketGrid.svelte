<script>
  // @ts-nocheck
  import { createEventDispatcher, onMount } from "svelte";
  import TrinketIcon from "$lib/components/trinkets/TrinketIcon.svelte";

  export let filteredTrinkets = [];
  export let selectedTrinket = null;

  const dispatch = createEventDispatcher();

  function choose(t) {
    dispatch("selectTrinket", t);
  }

  onMount(() => {
    if (typeof window !== "undefined" && window.$WowheadPower) {
      window.$WowheadPower.refreshLinks();
    }
  });

  // Sort A-Z by trinket name (case-insensitive)
  $: sortedTrinkets = [...(filteredTrinkets || [])].sort((a, b) =>
    (a?.name || "").localeCompare(b?.name || "", undefined, {
      sensitivity: "base",
    })
  );
</script>

<div class="flex flex-wrap gap-4 justify-center mx-auto max-w-6xl">
  {#each sortedTrinkets as t ((t.name || "").toLowerCase())}
    <TrinketIcon
      href={t.href}
      id={t.id}
      iconUrl={t.iconUrl}
      name={t.name}
      selected={selectedTrinket && (t.name || '').toLowerCase() === (selectedTrinket.name || '').toLowerCase()}
      onClick={() => choose(t)}
    />
  {/each}
  
</div>


