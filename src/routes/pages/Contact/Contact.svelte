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
    <div class="flex flex-grow justify-end mr-40 mb-7">
      <Desktopcontact />
    </div>
  </div>
</main>
