<script>
  import { icon } from "../../images.js"
</script>

<main class="md:flex md:flex-row mx-8 ">
  <!-- ! Channels from 115 Countries -->
  <div
    class="bg-[#3f323e] 2xl:h-[300px] md:h-[600px] xl:h-[350px] lg:h-[380px] md:w-[450px] rounded-lg m-6"
  >
    <div class="text-white flex flex-col justify-center items-start p-4">
      <h1 class="md:text-3xl text-2xl font-bold">
        <img src={icon.icon3.path} alt="">
        Channels from 115 Countries Around the World
      </h1>
      <p class="text-sm pt-3 font-medium leading-relaxed">
        Explore TV like never before with channels from 115 countries. <br />
        From captivating dramas to thrilling sports, we've got it all. <br />
        Experience diverse cultures and stories from the comfort of your home.
      </p>
    </div>
  </div>

  <!-- ! Refund Supported -->
  <div
    class="bg-[#3f323e] 2xl:h-[300px] md:h-[600px] lg:h-[380px] xl:h-[350px] md:w-[450px] rounded-lg m-6"
  >
    <div class="text-white flex flex-col justify-center items-start p-4">
      <h1 class="md:text-3xl text-2xl font-bold">
        <img src={icon.icon1.path} alt="">
        Refund Supported
      </h1>
      <p class="text-sm pt-3 font-medium leading-relaxed ">
        We take pride in our customer satisfaction commitment. Our refund policy
        is a testament to that. When you choose us, you're choosing peace of
        mind. If your viewing experience isn't as expected, rest assured that
        we've got your back. Explore our content with confidence.
      </p>
    </div>
  </div>

  <!-- !  Quality -->
  <div
    class="bg-[#3f323e] 2xl:h-[300px] xl:h-[350px] lg:h-[380px] md:h-[600px] md:w-[450px] rounded-lg m-6"
  >
    <div class="text-white flex flex-col justify-center items-start p-4">
      <h1 class="md:text-3xl text-2xl font-bold">
        <!-- the gradient didn't work see the src/lib/Components/for_home/icons.svelte -->
        <img src={icon.icon2.path} alt="">
        High Quality HD / FHD / 4K
      </h1>
      <p class="text-sm pt-3 font-medium leading-relaxed">
        Dive into an ocean of cinematic quality like never before. With HD, FHD,
        and 4K content, we're elevating your entertainment experience to new
        heights. Immerse yourself in crystal-clear visuals and breathtaking
        details that bring every scene to life. Discover the true meaning of
        immersive viewing. Quality is our promise.
      </p>
    </div>
  </div>
</main>
