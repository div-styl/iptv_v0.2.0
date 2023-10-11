<script>
  import Textabout from "./textabout.svelte";
  const contentTitle = "About - Nexgenstream";
  const contentDescription = "a few words about the IPTV";
</script>

<svelte:head>
  <title>{contentTitle}</title>
  <meta name="description" content={contentDescription} />
</svelte:head>

<main>
  <!-- Center the background box within the screen -->
  <div class="bg-[#1c031c] h-screen bg-scroll p-10 flex items-center">
    <!-- Content -->
    <Textabout />
  </div>
</main>
