<script>
  import { link as Link } from "svelte-spa-router";
</script>

<footer class="bg-[#0f010f]">
  <div
    class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
  >
    <span class="text-sm text-gray-200 dark:text-gray-500 sm:text-center flex justify-center"
      >© 2023 <a href="https://tvpro.netlify.app/" class="hover:underline underline-offset-4 hover:text-[#FF8913]/90"
        > TVPRO</a
      >. All Rights Reserved.
    </span>
    <ul
      class="flex flex-row justify-center items-center mt-3 s text-gray-50 dark:text-gray-400  text-center font-medium text-sm sm:mt-0"
    >
      <li>
        <a
          href="/"
          class="block p-2 transition  duration-300 ease-in-out hover:text-[#FF8913]/90 hover:underline underline-offset-4"
          use:Link
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="/Contact"
          class="block p-2 transition duration-300 ease-in-out hover:text-[#FF8913]/90 hover:underline underline-offset-4"
          use:Link
        >
          Contact
        </a>
      </li>
      <li>
        <a
          href="/Terms"
          class="block p-2 transition duration-300 ease-in-out hover:text-[#FF8913]/90 hover:underline underline-offset-4"
          use:Link
        >
          Privacy Policy
        </a>
      </li>
      <li>
        <a
          href="/About"
          class="block p-2 transition duration-300 ease-in-out hover:text-[#FF8913]/90 hover:underline underline-offset-4"
          use:Link
        >
          About Us
        </a>
      </li>
    </ul>
  </div>
</footer>
