<script>
  import "../App.css";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from "flowbite-svelte";
</script>

<div class="min-h-screen flex flex-col dark:bg-gray-900 bg-[#ece2c7]">
  <Navbar class="!bg-wow-navy border-b border-wow-gold/30">
    <NavBrand href="/">
      <span
        class="self-center text-2xl font-semibold tracking-wide whitespace-nowrap"
        style="font-family: Cinzel, serif; color: #F5F5F5;">WoW Tools</span
      >
    </NavBrand>
    <NavHamburger class="text-wow-gold" />
    <NavUl>
      <NavLi
        href="/"
        class="transition-colors text-wow-lightgold hover:text-wow-gold"
        >Home</NavLi
      >
    </NavUl>
  </Navbar>

  <main class="flex-1 w-full">
    <slot />
  </main>

  <footer class="mt-12 border-t border-wow-gold/20 bg-wow-navy">
    <div class="px-6 py-6 mx-auto text-wow-lightgold">
      <div
        class="flex flex-col gap-3 items-start md:flex-row md:items-center md:justify-between"
      >
        <div class="text-sm">
          <span class="opacity-80">Data & news courtesy of </span>
          <a
            class="underline hover:text-wow-gold"
            href="https://www.wowhead.com"
            target="_blank"
            rel="noopener noreferrer">Wowhead</a
          >
          <span class="opacity-80"> © Blizzard Entertainment</span>
        </div>
        <nav class="flex gap-4 text-sm">
          <a
            class="hover:text-wow-gold"
            href="https://github.com/jakeb0844"
            target="_blank"
            rel="noopener noreferrer">GitHub</a
          >
        </nav>
      </div>
    </div>
  </footer>
</div>
