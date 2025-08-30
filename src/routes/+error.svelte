<script>
  import { page } from "$app/stores";
  import { Button } from "flowbite-svelte";
</script>

<div class="min-h-screen flex items-center justify-center w-full">
  <div class="text-center w-full px-6">
    <!-- Error Code -->
    <div class="text-6xl font-bold text-red-600 dark:text-red-500 mb-4">
      {$page.status}
    </div>

    <!-- WoW-themed Error Message -->
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
      {#if $page.status === 404}
        The Page Has Been Consumed by the Void
      {:else}
        A Wild Error Appears
      {/if}
    </h1>

    <!-- Flavor Text -->
    <p class="text-xl text-gray-700 dark:text-gray-400 mb-8">
      {#if $page.status === 404}
        Looks like this page has been banished to the Twisting Nether. Perhaps a
        mischievous imp has made off with it?
      {:else}
        {$page.error?.message || "Something went wrong in Azeroth"}
      {/if}
    </p>

    <!-- Return Home Button -->
    <Button href="/" class="mx-auto">
      <svg
        class="w-5 h-5 mr-2"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
          clip-rule="evenodd"
        />
      </svg>
      Return to Stormwind
    </Button>

    <!-- Additional Flavor Text -->
    <p class="mt-8 text-sm text-gray-600 dark:text-gray-500 italic">
      "In the face of the void, we must remain steadfast." - Prophet Velen
    </p>
  </div>
</div>
