<script>
  import Home from "./routes/Home.svelte";
  import Layout from "./routes/Layout.svelte";
  import About from "./routes/pages/About/About.svelte";
  import Terms from "./routes/pages/Terms/Terms.svelte";
  const routes = {
    "/": Home,
    "/About": About,
    "/Terms": Terms,
  };
</script>

<Layout {routes} />
