<script>
  import { Card } from "flowbite-svelte";
  import RssServer from "$lib/components/RssServer.svelte";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  /** @type {import('./$types').PageData} */
  export let data;

  /** @type {HTMLElement | null} */
  let heroSection;
  let pageReady = false;

  function handleScroll() {
    const y = window.scrollY || 0;
    const offset = Math.min(40, y * 0.2);
    heroSection?.style.setProperty("--parallax", `${offset}px`);
  }

  /**
   * @param {HTMLElement} node
   */
  function reveal(node) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add("is-visible");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );
    node.classList.add("fade-in-up");
    observer.observe(node);
    return {
      destroy() {
        observer.disconnect();
      },
    };
  }

  onMount(() => {
    pageReady = true;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

{#if pageReady}
  <div class="min-h-screen" in:fade={{ duration: 400 }}>
    <!-- Hero Section with Header Image and overlay -->
    <section
      bind:this={heroSection}
      class="relative h-[500px] mb-8 overflow-hidden"
    >
      <div
        class="absolute inset-0 will-change-transform"
        style="background-image: url('wow-background.jpg'); background-size: cover; background-position: center 52%; transform: translateY(var(--parallax, 0px));"
      />
      <div
        class="absolute inset-0 bg-gradient-to-b from-wow-navy/80 via-wow-navy/65 to-wow-navy/70"
      />

      <div class="flex relative z-10 items-center h-full">
        <div class="px-6 mx-auto w-full md:w-3/4">
          <h1
            class="text-4xl font-bold md:text-5xl text-wow-offwhite"
            style="font-family: Cinzel, serif;"
          >
            WoW Tools
          </h1>
          <p class="mt-3 max-w-2xl text-wow-lightgold">
            Tools and news for adventurers across Azeroth.
          </p>
        </div>
      </div>
    </section>

    <div class="px-6 pb-6 w-full">
      <div class="mx-auto w-full md:w-3/4">
        <div
          use:reveal
          class="p-4 rounded-xl border backdrop-blur-sm border-wow-gold/30 bg-wow-parchment/90 shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
        >
          <RssServer title="Latest Wowhead News" items={data.newsItems} />
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="p-6 mx-auto mt-8 w-full md:w-3/4">
      <!-- Feature Cards -->
      <div
        use:reveal
        class="p-4 mb-12 rounded-xl border backdrop-blur-sm border-wow-gold/20 bg-white/40 shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
      >
        <div
          class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <Card
            href="/trinkets"
            class="!bg-wow-navy/90 hover:!bg-wow-teal transition-all duration-200 ease-in-out border border-wow-gold/30 hover:scale-[1.02] shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
          >
            <h3
              class="mb-2 text-xl font-bold text-wow-offwhite"
              style="font-family: Cinzel, serif;"
            >
              Trinket Tier List
            </h3>
            <p class="text-wow-lightgold">
              Stay up-to-date with the latest trinket rankings and make informed
              decisions about your gear choices.
            </p>
          </Card>
        </div>
      </div>
    </div>
  </div>
{/if}
