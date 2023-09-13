<script>
    import Router from "svelte-spa-router";
    import Nav from "../lib/Components/top_bar/mainbar.svelte";
    import Footermain from "../lib/Components/footer/footermain.svelte";
    export let routes = {}
</script>

<main class="bg-[#0F010F] h-screen bg-cover w-screen ">
    <Nav />
    <Router routes={routes} />
    <Footermain />
</main>
