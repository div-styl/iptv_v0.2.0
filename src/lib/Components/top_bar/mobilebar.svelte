<script>
  import { link as Link } from "svelte-spa-router";
  import Hum from "./humber.svelte";
  let isNavOpen = false;
  const toggleNavBar = () => {
    isNavOpen = !isNavOpen;
  };
</script>

<!-- ! button menu for mobile only for 768px and below humbugger menu -->
<button
  on:click={toggleNavBar}
  class="flex flex-col justify-between items-center md:hidden right-5 absolute z-[1000]"
>
  <Hum />
</button>

<div
  class={`bg-[#0f010f]  transition ${
    isNavOpen ? "showFromRight" : "-translate-x-full"
  } fixed w-screen h-screen top-0 left-0 flex flex-col 
  justify-center items-center md:hidden z-[999] text-white text-opacity-80 font-nicomoji`}
>
  <ul>
    <li>
      <a
        href="/"
        class="block p-2 transition duration-300 ease-in-out hover:text-blue-600/60 hover:underline text-2xl"
        use:Link
        on:click={toggleNavBar}
      >
        Home
      </a>
    </li>
    <li>
      <a
        href="/Contact"
        class="block p-2 transition duration-300 ease-in-out hover:text-blue-600/60 hover:underline text-2xl"
        use:Link
        on:click={toggleNavBar}
      >
        Contact
      </a>
    </li>
    <li>
      <a
        href="/Terms"
        class="block p-2 transition duration-300 ease-in-out hover:text-blue-600/60 hover:underline text-2xl"
        use:Link
        on:click={toggleNavBar}
      >
        Terms
      </a>
    </li>
  </ul>
</div>
