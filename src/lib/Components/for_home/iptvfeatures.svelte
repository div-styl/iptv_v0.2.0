<script>
  import MIcon from "./icons.svelte";
  import Icon from "@iconify/svelte";
</script>

<main class="md:flex md:flex-row mx-2">
  <!-- ! Channels from 115 Countries -->
  <div
    class="bg-[#3f323e] 2xl:h-[300px] md:h-[470px] xl:h-[350px] lg:h-[380px] md:w-[500px] rounded-lg m-6"
  >
    <div class="text-white flex flex-col justify-center items-start p-4">
      <h1 class="md:text-3xl text-2xl font-bold">
        <MIcon>
          <path
            fill="url(#grad1)"
            d="M880 305H624V192c0-17.7-14.3-32-32-32H184v-40c0-4.4-3.6-8-8-8h-56c-4.4
            0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V640h248v113c0 
            17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V337c0-17.7-14.3-32-32-32z"
          />
        </MIcon>
        Channels from 115 Countries Around the World
      </h1>
      <p class="text-sm pt-3 font-medium">
        Explore TV like never before with channels from 115 countries. <br />
        From captivating dramas to thrilling sports, we've got it all. <br />
        Experience diverse cultures and stories from the comfort of your home.
      </p>
    </div>
  </div>

  <!-- ! Refund Supported -->
  <div
    class="bg-[#3f323e] 2xl:h-[300px] md:h-[470px] lg:h-[380px] xl:h-[350px] md:w-[500px] rounded-lg m-6"
  >
    <div class="text-white flex flex-col justify-center items-start p-4">
      <h1 class="md:text-3xl text-2xl font-bold">
        <MIcon>
          <path
            fill="url(#grad1)"
            fill-rule="evenodd"
            d="M24.039 6c-4.517 0-8.632 1.492-11.067 
          2.711c-.22.11-.425.218-.616.322c-.378.206-.7.398-.956.567l2.77 4.078l1.304.519c5.096 2.571 
          11.93 2.571 17.027 0l1.48-.768L36.6 9.6a15.515 15.515 0 0 0-1.689-.957C32.488 7.437 28.471 
          6 24.04 6Zm-6.442 4.616a24.574 24.574 0 0 1-2.901-.728c2.281-1.013 5.68-2.088 9.343-2.088c2.537 
          0 4.936.516 6.92 1.17c-2.325.327-4.806.882-7.17 1.565c-1.86.538-4.034.48-6.192.081Zm15.96 
          5.064l-.246.124c-5.606 2.828-13.042 2.828-18.648 0l-.233-.118C6.008 24.927-.422 41.997 24.039 
          41.997s17.874-17.389 9.518-26.317ZM23 24a2 2 0 1 0 0 4v-4Zm2-2v-1h-2v1a4 
          4 0 0 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1
          1 0 1 0-1.885.666A4.001 4.001 0 0 0 23 36v1h2v-1a4 4 0 0 0 0-8v-4c.87 0 1.611.555 1.887 
          1.333a1 1 0 1 0 1.885-.666A4.001 4.001 0 0 0 25 22Zm0 8v4a2 2 0 1 0 0-4Z"
            clip-rule="evenodd"
          />
        </MIcon>
        Refund Supported <br />
      </h1>
      <p class="text-sm pt-3 font-medium">
        We take pride in our customer satisfaction commitment. Our refund policy
        is a testament to that. When you choose us, you're choosing peace of
        mind. If your viewing experience isn't as expected, rest assured that
        we've got your back. Explore our content with confidence.
      </p>
    </div>
  </div>

  <!-- !  Quality -->
  <div
    class="bg-[#3f323e] 2xl:h-[300px] xl:h-[350px] lg:h-[380px] md:h-[470px] md:w-[500px] rounded-lg m-6"
  >
    <div class="text-white flex flex-col justify-center items-start p-4">
      <h1 class="md:text-3xl text-2xl font-bold">
        <!-- the gradient didn't work see the src/lib/Components/for_home/icons.svelte -->
        <MIcon>
          <path
            fill="currentColor"
            d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 
          0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM2 2h12s2 0 2 2v6s0 2-2 2H2s-2 0-2-2V4s0-2 2-2z"
          />
        </MIcon>
        High Quality HD / FHD / 4K
      </h1>
      <p class="text-sm pt-3 font-medium">
        Dive into an ocean of cinematic quality like never before. With HD, FHD,
        and 4K content, we're elevating your entertainment experience to new
        heights. Immerse yourself in crystal-clear visuals and breathtaking
        details that bring every scene to life. Discover the true meaning of
        immersive viewing. Quality is our promise.
      </p>
    </div>
  </div>
</main>
