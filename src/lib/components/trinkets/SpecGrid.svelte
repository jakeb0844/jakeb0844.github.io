<script>
  // @ts-nocheck
  import { createEventDispatcher } from "svelte";
  import SpecIcon from "$lib/components/SpecIcon.svelte";

  export let filteredSpecs = [];
  export let selectedSpec = "";

  const dispatch = createEventDispatcher();

  function choose(label) {
    dispatch("selectSpec", label);
  }
</script>

<div class="flex flex-wrap gap-4 justify-center mx-auto max-w-6xl">
  {#each filteredSpecs as spec (`${spec.className}-${spec.specName}`)}
    <SpecIcon
      className={spec.className}
      specName={spec.specName}
      selected={selectedSpec === `${spec.className} ${spec.specName}`}
      onClick={() => choose(`${spec.className} ${spec.specName}`)}
    />
  {/each}
</div>


