<script>
    import Router from "svelte-spa-router";
    import Nav from "../lib/Components/top_bar/mainbar.svelte";
    export let routes = {}
</script>

<main class="bg-[#0F010F] h-screen bg-cover w-screen ">
    <Nav />
    <Router routes={routes} />
</main>
