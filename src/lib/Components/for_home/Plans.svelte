<script>
  // your script goes here
  import {scrollRef} from 'svelte-scrolling'
  import { icon } from '../../images';
</script>

<main use:scrollRef={'plans'}>
  <h1 class="md:text-4xl text-2xl flex justify-center text-white font-extrabold">Choose Your Plan</h1>
  <!-- container of background -->
  <div class="md:p-10 md:mx-4 p-3 mx-3">
    <div class="bg-[#1c031c] h-[550px] w-[300px] rounded-xl p-5 pt-8 flex flex-col justify-normal items-center">
      <!-- content of background -->
      <h1 class="text-white text-2xl font-light ">
        1 Month
      </h1>
      <h2 class="text-white text-6xl font-bold mt-3">
        $59.99
      </h2>
      <!-- list of features-->
      <div class="p-10">
        <ul class="text-white font-medium text-sm leading-8 text-justify 
          underline decoration-cyan-600 
          hover:underline-offset-4 cursor-pointer  
          ">
          <li>HD/FHD/4K/8K Quality</li>
          <li>+15.000 Channels</li>
          <li>+100.000 VOD Updatable </li>
          <li>Watch from 115 Countries</li>
          <li>Refund Supported</li>
      </div>
      <div >
        <button  class="bg-[#ff9900] rounded-md px-4 py-3 flex justify-center hover:bg-[#ff9900]/70 ">
          <a href="https://hosted.transaction.cloud/payment/product/TC-PR_AolDqa1" class="text-black text-xl font-bold">Buy Now</a>
        </button>
        <h1 class="text-white mt-5 font-medium text-[15px] flex justify-center">Ready In 3-2 Days</h1>
        <div class="mt-4 flex whitespace-nowrap space-x-2">
          <img src={icon.icon4.path} alt=""/>
          <img src={icon.icon5.path} alt="">
          <img src={icon.icon6.path} alt="">
          <img src={icon.icon7.path} alt="">
        </div>
      </div>
    </div>
  </div>
</main>

