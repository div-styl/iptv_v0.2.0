<script>
    import Background from "/Assets/wall.jpg";
    import CButton from "./button.svelte";
    import scrollIntoView  from "./button.svelte";
    import { scrollTo } from 'svelte-scrolling';
</script>
  
  <main>
    <div style="background-image: url({Background});" 
      class="bg-cover md:bg-center bg-no-repeat">
      <!-- container of everything -->
      <div class="flex flex-col justify-between items-start md:p-9 p-5">
        <!-- container of the header text -->
        <div class="mb-4 md:mb-0 text-white">
          <!-- Add margin-bottom to push the button down on mobile -->
          <h1 class="font-extrabold md:text-3xl text-2xl">
            All-In-One Quality<br />
            IPTV Service
          </h1>
          <p class="md:text-justify text-xs font-normal leading-5 md:mb-5 mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
            Quisquam
            voluptatum, quibusdam, quia, quos voluptates voluptatibus <br />
            exercitationem quod quae voluptate <br />
            quibusdam, quia, quos voluptates voluptatibus <br />
            exercitationem quod quae
            voluptate
          </p>
        </div>
        <CButton>
              Get Started
        </CButton>
      </div>
    </div>
  </main>
  
