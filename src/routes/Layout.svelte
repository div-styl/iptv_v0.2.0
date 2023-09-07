<script>
    import Router from "svelte-spa-router";
    import Nav from "../lib/Components/top_bar/mainbar.svelte";
    export let routes = {}
</script>

<main>
    <Nav />
    <Router routes={routes} />
</main>