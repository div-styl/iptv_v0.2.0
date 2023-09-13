<script>
  import { Link } from "svelte-routing";
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
      <Link
        to="/"
        class="block p-2 transition duration-300 ease-in-out hover:text-blue-600/60 hover:underline text-2xl"
        
        on:click={toggleNavBar}
      >
        Home
    </Link>
    </li>
    <li>
      <Link
        to="/Contact"
        class="block p-2 transition duration-300 ease-in-out hover:text-blue-600/60 hover:underline text-2xl"
        
        on:click={toggleNavBar}
      >
        Contact
    </Link>
    </li>
    <li>
      <Link
        to="/About"
        class="block p-2 transition duration-300 ease-in-out hover:text-blue-600/60 hover:underline text-2xl"
        
        on:click={toggleNavBar}
      >
        About
    </Link>
    </li>
  </ul>
</div>
