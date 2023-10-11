<script>
  import Header from "./header.svelte";
  import Info from "./info.svelte";
  import Desktopcontact from "./form.svelte";
  const contentTitle = "Contact me";
  const contentDescription = "Contact me via email or other socail media platforms";
</script>
<svelte:head>
  <title>{contentTitle}</title>
  <meta name="description" content={contentDescription} />
</svelte:head>
<main class="md:h-screen">
  <Header />

  <div class="md:flex">
    <div class="md:flex-shrink-0">
      <Info />
    </div>
    <div class="md:flex md:flex-grow md:justify-end md:mr-40 md:mb-7">
      <Desktopcontact />
    </div>
  </div>
</main>
