<script>
  // @ts-nocheck
  export let href;
  export let iconUrl;
  export let id;
  export let name = '';
  export let selected = false;
  export let onClick = () => {};
  export let dimUnselected = true;
</script>

<a
  href={href}
  data-wowhead={`item=${id}`}
  class="spec-icon-wrapper relative w-12 h-12 rounded-lg overflow-hidden transition-all duration-200 border border-wow-gold/40 shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.35)] hover:scale-105 {selected
    ? 'ring-4 ring-yellow-400 scale-110 shadow-[0_0_0_3px_rgba(255,215,0,0.35)]'
    : (dimUnselected ? 'opacity-75 hover:opacity-100' : '')}"
  on:click|preventDefault={onClick}
  title={name}
  style="background-image: url({iconUrl}); background-size: 120%; background-position: center;"
  role="button"
  aria-label={name}
>
  <div class="absolute inset-0 bg-gradient-to-b pointer-events-none from-black/25 via-black/10 to-black/30" />
  <div class="absolute inset-0 rounded-lg ring-1 pointer-events-none ring-white/10" />
  {#if !iconUrl}
    <div class="flex absolute inset-0 justify-center items-center bg-black/30 text-white/50">?</div>
  {/if}
</a>


