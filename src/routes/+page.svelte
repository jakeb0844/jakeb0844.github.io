<script>
	import { Card } from 'flowbite-svelte';
	import RssServer from '$lib/components/RssServer.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="min-h-screen">
	<!-- Hero Section with Header Image -->
	<div
		class="relative h-[600px] mb-12 overflow-hidden"
		style="background-image: url('wow-background.jpg'); background-size: cover; background-position: center 52%;"
	/>

	<div class="px-6 pb-6 w-full">

		<RssServer title="Latest Wowhead News" items={data.newsItems} />
	</div>

	<!-- Main Content -->
	<div class="p-6 mx-auto w-full md:w-3/4">
		<!-- Feature Cards -->
		<div
			class="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
		>
			<Card href="/trinkets">
				<h3
					class="mb-2 text-xl font-bold text-gray-900 dark:text-white"
				>
					Trinket Tier List
				</h3>
				<p class="text-gray-700 dark:text-gray-400">
					Stay up-to-date with the latest trinket rankings and make
					informed decisions about your gear choices.
				</p>
			</Card>
		</div>
	</div>
</div>
