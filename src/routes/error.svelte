<script>
  const contentTitle = "404 not found";
  const contentDescription =
    "page you encountered does not exist";
</script>

<svelte:head>
  <title>{contentTitle}</title>
  <meta name="description" content={contentDescription} />
</svelte:head>


<div class="flex items-center justify-center h-screen">
  <div class="">
    <div class="flex flex-col items-center">
      <h1 class="font-bold text-6xl text-orange-500 lg:text-8xl">404</h1>

      <h6 class="mb-2 text-2xl font-bold text-center text-gray-500 md:text-4xl lg:text-6xl">
        <span class="text-red-500">Oops!</span> Page not found
      </h6>

      <p class="mb-8 text-center text-gray-500 md:text-lg lg:text-3xl">
        The page you’re looking for doesn’t exist.
      </p>

      <a
        href="/"
        class="px-6 py-2 text-base font-semibold text-black bg-orange-500 rounded-full hover:bg-orange-600"
        >Go home</a
      >
    </div>
  </div>
</div>
