<script>
  import { Card } from 'flowbite-svelte';
</script>

<div class="min-h-screen">
  <!-- Hero Section with Header Image -->
  <div class="relative h-[400px] mb-12 overflow-hidden" style="background-image: url('wow-background.jpg'); background-size: cover; background-position: center;">
  </div>

  <!-- Main Content -->
  <div class="w-full px-6">
    <!-- Feature Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
      <Card href="/trinkets">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Trinket Tier List
        </h3>
        <p class="text-gray-700 dark:text-gray-400">
          Stay up-to-date with the latest trinket rankings and make informed decisions
          about your gear choices.
        </p>
      </Card>
    </div>
  </div>
</div>