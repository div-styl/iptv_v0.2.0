<script>
  import { link as Link } from "svelte-spa-router";
  import Logo from "/Assets/logo_hub.png"
</script>

<nav class="bg-[#0f010f]">
  <!-- nav container -->
  <div class="flex items-center justify-between mx-auto p-3">
    <!-- logo container -->
    <a href="/">
      <!-- logo side -->
      <ul class="flex items-center space-x-3">
        <li>
          <!-- lgog as img -->
          <a href="/" use:Link>
            <img src={Logo} class="w-[40px] h-[40px]" alt="" />
          </a>
        </li>
        <li>
          <!-- div class for name of logo only -->
          <div
            class="text-white text-opacity- font-semibold font-nicomoji text-[25px]"
          >
            IPTVHUB
          </div>
        </li>
      </ul>
    </a>
    <!-- nav bar other webpages container using div -->
    <!-- ! nav bar for desktop and tablets only for 768px and above -->
    <div class="hidden md:flex items-center mx-9 border-solid">
      <ul
        class="flex items-center space-x-4 font-medium font-nicomoji text-[20px] text-yellow-400 text-opacity-80"
      >
        <li>
          <a href="/" class="text-white hover:text-[#FF8913]/90" use:Link>Home</a>
        </li>
        <li>
          <a href="/About" class="text-white hover:text-[#FF8913]/90" use:Link>About</a>
        </li>
        <li>
          <a href="/Terms" class="text-white hover:text-[#FF8913]/90" use:Link
            >Terms</a
          >
        </li>
      </ul>
    </div>
    <!-- ! button menu for mobile only for 768px and below humbugger menu -->
  </div>
</nav>
