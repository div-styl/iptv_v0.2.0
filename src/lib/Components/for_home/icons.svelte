<!-- MIcon.svelte -->
<script>
  export let width = "40";
  export let height = "44";
  export let viewBox = "0 0 1024 1024";
</script>

<svg xmlns="http://www.w3.org/2000/svg" {width} {height} {viewBox}>
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="5%" style="stop-color:#b794f4;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#ed64a6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f56565;stop-opacity:1" />
    </linearGradient>
  </defs>
    <slot />
</svg>

