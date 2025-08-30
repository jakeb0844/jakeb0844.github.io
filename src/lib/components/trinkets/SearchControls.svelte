<script>
  // @ts-nocheck
  import { createEventDispatcher } from "svelte";

  export let mode;
  export let searchTerm;
  export let selectedSpec;
  export let selectedTrinket;
  export let filteredSpecs = [];
  export let filteredTrinkets = [];

  const dispatch = createEventDispatcher();
  let dropdownOpen = false;

  function setMode(newMode) {
    dropdownOpen = false;
    dispatch("setMode", newMode);
  }

  function onInput(event) {
    dispatch("updateSearchTerm", event.target.value);
  }

  function chooseSpec(s) {
    const label = `${s.className} ${s.specName}`;
    dispatch("selectSpec", { label, ...s });
  }

  function chooseTrinket(t) {
    dispatch("selectTrinket", t);
  }
</script>

<div
  class="p-4 mb-8 rounded-xl"
>
  <form
    style="position:relative;"
    class="mx-auto max-w-lg"
    on:submit|preventDefault
    autocomplete="off"
  >
    <div class="flex">
      <label
        for="search-dropdown"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >Search</label
      >
      <div class="relative">
        <button
          id="dropdown-button"
          class="inline-flex z-10 items-center px-4 py-2.5 text-sm font-medium text-center border shrink-0 text-wow-offwhite bg-wow-navy border-wow-gold/40 rounded-s-lg hover:bg-wow-teal focus:outline-none"
          type="button"
          on:click={() => (dropdownOpen = !dropdownOpen)}
        >
          {mode === "spec" ? "Specs" : "Trinkets"}
          <svg
            class="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {#if dropdownOpen}
          <div
            id="dropdown"
            class="absolute z-10 mt-1 w-44 rounded-lg border shadow-sm bg-wow-parchment border-wow-gold/30"
          >
            <ul class="py-2 text-sm text-wow-navy" aria-labelledby="dropdown-button">
              <li>
                <button
                  type="button"
                  class="inline-flex px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  on:click={() => setMode("spec")}>
                  Specs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  on:click={() => setMode("trinket")}>
                  Trinkets
                </button>
              </li>
            </ul>
          </div>
        {/if}
      </div>
      <div class="relative w-full">
        <input
          type="search"
          id="search-dropdown"
          class="block z-20 p-2.5 w-full text-sm border text-wow-navy bg-wow-parchment rounded-e-lg border-wow-gold/40 focus:ring-0 focus:border-wow-gold"
          placeholder={mode === "spec" ? "Search specs..." : "Search trinkets..."}
          value={searchTerm}
          on:input={onInput}
        />
        <button
          type="submit"
          class="absolute top-0 p-2.5 h-full text-sm font-medium border end-0 text-wow-offwhite bg-wow-navy rounded-e-lg border-wow-gold/40 hover:bg-wow-teal focus:outline-none"
        >
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </div>
    </div>

    {#if mode === "spec" && searchTerm && !selectedSpec}
      <div
        style="position:absolute; z-index: 1000; background-color: white; overflow-y: auto; max-height: 300px;"
        class="p-2 mx-auto w-full max-w-lg rounded-lg border shadow-sm bg-white/5 border-black/20"
      >
        {#each filteredSpecs as s}
          <button
            class="p-2 w-full text-left rounded transition-colors hover:bg-wow-parchment/60"
            on:click={() => chooseSpec(s)}
          >
            {s.className}
            {s.specName}
          </button>
        {/each}
        {#if filteredSpecs.length === 0}
          <p class="text-center text-wow-navy/60">
            No specs match that search.
          </p>
        {/if}
      </div>
    {/if}

    {#if searchTerm && !selectedTrinket}
      <div
        style="position:absolute; z-index: 1000; background-color: white; overflow-y: auto; max-height: 300px;"
        class="p-2 mx-auto w-full max-w-lg rounded-lg border shadow-sm bg-white/5 border-black/20"
      >
        {#each filteredTrinkets as t}
          <button
            class="flex gap-1 p-2 w-full text-left rounded transition-colors hover:bg-wow-parchment/60"
            on:click={() => chooseTrinket(t)}
          >
            {#if t.iconUrl}
              <img src={t.iconUrl} alt={t.name} class="w-6 h-6" />
            {/if}
            <span>{t.name}</span>
          </button>
        {/each}
        {#if filteredTrinkets.length === 0}
          <p class="text-center text-wow-navy/60">
            No trinkets match that search.
          </p>
        {/if}
      </div>
    {/if}
  </form>
</div>


