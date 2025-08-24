<script>
  import '../App.css';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<div class="min-h-screen bg-white dark:bg-gray-900">
  <Navbar>
    <NavBrand href="/">
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">WoW Tools</span>
    </NavBrand>
    <NavHamburger />
    <NavUl>
      <NavLi href="/">Home</NavLi>
      <!-- We'll add the second page link here later -->
    </NavUl>
  </Navbar>

  <main class="w-full">
    <slot />
  </main>
</div>