<script>
  import { Link } from "svelte-routing";
  import Logo from "/Assets/logo_hub.png";
  import Mobilebar from "./mobilebar.svelte";
</script>

<nav class="bg-[#0f010f]">
  <!-- nav container -->
  <div class="flex items-center justify-between mx-auto p-3">
    <!-- logo container -->

    <!-- logo side -->
    <ul class="flex items-center space-x-3">
      <li>
        <!-- lgog as img -->
        <Link to="/">
          <img src={Logo} alt="TVPRO Logo" class="w-[40px] h-[40px]" />
        </Link>
      </li>
      <li>
        <!-- div class for name of logo only -->
        <div
          class="text-white text-opacity- font-semibold font-nicomoji text-[25px]"
        >
        Nexgenstream
        </div>
      </li>
    </ul>
    <!-- nav bar other webpages container using div -->
    <!-- ! nav bar for desktop and tablets only for 768px and above -->
    <div class=" hidden md:flex items-center mx-9 border-solid">
      <ul
        class="flex items-center space-x-4 font-medium font-nicomoji text-[20px] text-yellow-400 text-opacity-80"
      >
        <li>
          <Link to="/" class="text-white hover:text-[#FF8913]/90">Home</Link>
        </li>
        <li>
          <Link to="/Contact" class="text-white hover:text-[#FF8913]/90"
            >Contact</Link
          >
        </li>
        <li>
          <Link to="/About" class="text-white hover:text-[#FF8913]/90"
            >About</Link
          >
        </li>
      </ul>
    </div>
    <!-- ! button menu for mobile only for 768px and below humbugger menu -->
    <Mobilebar />
  </div>
</nav>
