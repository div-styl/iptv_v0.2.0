<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./Home.svelte";
  import Contact from "./pages/Contact/Contact.svelte";
  import Terms from "./pages/Terms/Terms.svelte";
  import About from "./pages/About/mainabout.svelte";
  import Mainbar from "../lib/Components/top_bar/mainbar.svelte";
  import Footermain from "../lib/Components/footer/footermain.svelte";
  export let url = "";
</script>

<main class="bg-[#0F010F] h-screen bg-cover w-screen">
<Router {url}>
  <Mainbar />
  <Route path="/" component={Home} />
  <Route path="/Contact" component={Contact} />
  <Route path="/Terms" component={Terms} />
  <Route path="/About" component={About} />
  <Footermain />
</Router>
</main>