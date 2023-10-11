<script>
  import Head from "../lib/Components/for_home/head.svelte";
  import MarqueeMovie from "../lib/Components/for_home/marquee_movie.svelte";
  import MarqueeChannels from "../lib/Components/for_home/marquee_channels.svelte";
  import Features from "../lib/Components/for_home/iptvfeatures.svelte";
  import Plans from "../lib/Components/for_home/Plans.svelte";
  import Process from "../lib/Components/for_home/process.svelte";
  import Faq from "../lib/Components/for_home/FAQ.svelte";
  import Support from "../lib/Components/for_home/onsupport.svelte";

  import Test from "./test.svelte";
  export let contentTitle = "Popular Movies";
  export let contentDescription =
    "Explore the latest and most popular movies on TVPRO.";
</script>

<svelte:head>
  <title>{contentTitle} - TVPRO</title>
  <meta name="description" content={contentDescription} />
</svelte:head>

<main class="bg-[#0F010F] bg-cover bg-center bg-scroll">
  <Head />
  <MarqueeChannels />
  <MarqueeMovie />
  <Features />
  <Plans />
  <Process />
  <Faq />
  <Support />
</main>
