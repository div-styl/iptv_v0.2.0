<script>
  // You can add JavaScript logic here if needed
  import Privacy from "./privacy.svelte";
  const contentTitle = "Terms and Pravicy";
  const contentDescription = "our terms and pravicy";
</script>

<svelte:head>
  <title>{contentTitle}</title>
  <meta name="description" content={contentDescription} />
</svelte:head>

<main class="flex justify-center">
  <!-- Center the background box within the screen -->
  <div class="bg-[#1c031c] bg-cover bg-center bg-scroll p-10">
    <!-- Content -->
    <Privacy />
  </div>
</main>
