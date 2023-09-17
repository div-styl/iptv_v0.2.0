<script>
  import Header from "./header.svelte";
  import Info from "./info.svelte";
  import Desktopcontact from "./form.svelte";
</script>

<main>
  <Header />

  <div class="flex">
    <div class="flex-shrink-0">
      <Info />
    </div>
    <div class="flex flex-grow justify-center">
      <Desktopcontact />
    </div>
  </div>
</main>
