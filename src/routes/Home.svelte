<script>
  import Head from "../lib/Components/for_home/head.svelte";
  import MarqueeMovie from "../lib/Components/for_home/marquee_movie.svelte";
  import MarqueeChannels from "../lib/Components/for_home/marquee_channels.svelte";
  import Features from "../lib/Components/for_home/iptvfeatures.svelte";
  import Plans from "../lib/Components/for_home/Plans.svelte";
  import Process from "../lib/Components/for_home/process.svelte";
  import Faq from "../lib/Components/for_home/FAQ.svelte";
  import Support from "../lib/Components/for_home/onsupport.svelte";

  export let contentTitle = "Popular Movies - nexgenstream";
  export let contentDescription =
    "Explore our popular movies, series and channels with our IP_TV platform";
</script>

<svelte:head>
  <title>{contentTitle}</title>
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
