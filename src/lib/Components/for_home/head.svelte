<script>
    import Background from "/Assets/see.jpg";
    import CButton from "./button.svelte";

</script>
  
  <main>
    <div  style="background-image: url({Background});" 
      class="bg-cover md:bg-center md:p-16 bg-no-repeat">
      <!-- container of everything -->
      <div class="flex flex-col justify-between items-start md:p-12 p-3">
        <!-- container of the header text -->
        <div class="mb-4 md:mb-0 text-white">
          <!-- Add margin-bottom to push the button down on mobile -->
          <h1 class="font-black md:text-7xl text-2xl">
            All-In-One Quality<br />
            IPTV Service
          </h1>
          <p class="md:text-justify text-xs md:text-lg font-bold leading-5 md:mb-5 mb-3">
          Elevate your entertainment with our Comprehensive <br />
          IPTV Solution! Access your beloved shows, movies, <br />
          and sports channels effortlessly, all in stunning high-definition. <br/> 
          Bid farewell to traditional cable and 
          unlock a world of endless entertainment. 
          </p>
        </div>
        <CButton>
              Get Started
        </CButton>
      </div>
    </div>
  </main>
  
