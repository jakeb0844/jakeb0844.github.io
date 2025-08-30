<script>
  import specIcons from "$lib/data/spec-icons.js";

  export let className;
  export let specName;
  export let selected = false;
  export let onClick = () => {};

  // Convert class and spec names to lowercase and handle special cases
  const getSpecKey = (className, specName) => {
    const classSlug = className.toLowerCase().replace(/\s/g, "");
    const specSlug = specName.toLowerCase().replace(/\s/g, "_");
    return `${specSlug}_${classSlug}`;
  };

  $: specKey = getSpecKey(className, specName);
  $: iconUrl = specIcons[specKey]?.medium;
</script>

<button
  class="spec-icon-wrapper relative w-12 h-12 rounded-lg overflow-hidden transition-all duration-200 {selected
    ? 'ring-2 ring-yellow-400 scale-110'
    : 'opacity-75 hover:opacity-100'}"
  on:click={onClick}
  title={`${specName} ${className}`}
  style="background-image: url({iconUrl}); background-size: cover; background-position: center;"
>
  {#if iconUrl}
    <!-- <img src={iconUrl} alt={`${specName} ${className}`} class="w-full h-full object-cover" /> -->
  {:else}
    <div
      class="absolute inset-0 bg-black/30 flex items-center justify-center text-white/50"
    >
      ?
    </div>
  {/if}
</button>

<style>
  /* No additional styles needed as we're using direct image URLs */
</style>
