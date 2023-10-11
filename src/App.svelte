<script>
  import Layout from "./routes/Layout.svelte";
  import { inject } from "@vercel/analytics";

  let pageTitle = "TVPRO - Your Digital Entertainment Hub";
  let pageDescription =
    "Discover a world of movies, TV shows, and channel's with TVPRO";

  inject();
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <!-- Add other meta tags and SEO-related information as needed -->
</svelte:head>

<Layout />
