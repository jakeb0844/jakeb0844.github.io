<script>
  import '../App.css';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import { bgTheme } from '$lib/stores/bgTheme.js';
  import { derived } from 'svelte/store';

  const bgClass = derived(bgTheme, ($bgTheme) => {
    switch ($bgTheme) {
      case 'parchment':
        return 'bg-wow-parchment/60';
      case 'sandstone-60':
        return 'bg-[#efe7d3]';
      case 'sandstone-70':
        return 'bg-[#ece2c7]';
      case 'sandstone-80':
        return 'bg-[#e8dcc0]';
      case 'sandstone-90':
        return 'bg-[#e4d6b7]';
      case 'sandstone-100':
        return 'bg-[#dfcfad]';
      case 'night-sky':
        return 'bg-gradient-to-b from-[#0b1e3a] via-[#0f2649] to-[#152a3f]';
      case 'emerald-dream':
        return 'bg-gradient-to-b from-[#0b3a29] via-[#145a3a] to-[#0b3a29]';
      case 'forge':
        return 'bg-gradient-to-b from-[#3a0b0b] via-[#8c5e3c] to-[#3a0b0b]';
      case 'twilight':
        return 'bg-gradient-to-b from-[#1a1133] via-[#232d4d] to-[#0b1e3a]';
      case 'storm':
        return 'bg-gradient-to-b from-[#0c2340] via-[#193a6a] to-[#0c2340]';
      case 'abyssal':
        return 'bg-gradient-to-b from-[#05080f] via-[#0b1e3a] to-[#05080f]';
      case 'scarlet':
        return 'bg-gradient-to-b from-[#2a0b0b] via-[#7a1f1b] to-[#2a0b0b]';
      case 'arcane':
        return 'bg-gradient-to-b from-[#1a0f2e] via-[#3b2a6a] to-[#1a0f2e]';
      default:
        return 'bg-wow-parchment/60';
    }
  });
</script>

<div class={`min-h-screen flex flex-col dark:bg-gray-900 ${$bgClass}`}>
  <Navbar class="!bg-wow-navy border-b border-wow-gold/30">
    <NavBrand href="/">
      <span class="self-center text-2xl font-semibold tracking-wide whitespace-nowrap" style="font-family: Cinzel, serif; color: #F5F5F5;">WoW Tools</span>
    </NavBrand>
    <NavHamburger class="text-wow-gold" />
    <NavUl>
      <NavLi href="/" class="transition-colors text-wow-lightgold hover:text-wow-gold">Home</NavLi>
    </NavUl>
  </Navbar>

  <main class="flex-1 w-full">
    <slot />
  </main>

  <footer class="mt-12 border-t border-wow-gold/20 bg-wow-navy">
    <div class="px-6 py-6 mx-auto w-full md:w-3/4 text-wow-lightgold">
      <div class="flex flex-col gap-3 items-start md:flex-row md:items-center md:justify-between">
        <div class="text-sm">
          <span class="opacity-80"> • Data & news courtesy of </span>
          <a class="underline hover:text-wow-gold" href="https://www.wowhead.com" target="_blank" rel="noopener noreferrer">Wowhead</a>
          <span class="opacity-80"> • © Blizzard Entertainment</span>
        </div>
        <nav class="flex gap-4 text-sm">
          <a class="hover:text-wow-gold" href="https://github.com/jakeb0844" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </div>
    </div>
  </footer>
</div>