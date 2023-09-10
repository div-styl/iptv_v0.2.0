<script>
  import Home from "./routes/Home.svelte";
  import Layout from "./routes/Layout.svelte";
  import Contact from "./routes/pages/Contact/Contact.svelte";
  import Terms from "./routes/pages/Terms/Terms.svelte";
  const routes = {
    "/": Home,
    "/Contact": Contact,
    "/Terms": Terms,
  };
</script>

<Layout {routes} />
