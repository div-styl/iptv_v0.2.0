<script>
  // import { scrollRef } from "svelte-scrolling";
  import { icon } from "../../images";
  import Test from "../../../routes/test.svelte";

  const cards = [
    { duration: "1 Month", price: "$14.99", color: "#1c031c" , boarder: "none" },
    { duration: "3 Month", price: "$25.99", color: "#1c031c", boarder: "none" },
    { duration: "6 Month", price: "$39.99", color: "#0a0909", boarder: "1px solid #ff9900" },
    { duration: "12 Month", price: "$59.99", color: "#1c031c", boarder: "none" },
  ];
</script>

<main id="plans">
  <h1
    class="md:text-4xl text-2xl flex justify-center text-white font-extrabold"
  >
    Choose Your Plan
  </h1>

  <div
    class="flex xl:flex-row xl:flex-nowrap flex-wrap overflow-x-hidden justify-center  mt-10  md:space-x-16" 
  >
    {#each cards as { duration, price, color, boarder }}
      <div class="md:p-4 md:w-[300px] mx-3 py-5">
        <div
          class="h-[580px] w-[300px] rounded-xl p-5 pt-8  flex flex-col justify-center items-center "
          style="background-color: {color}; border: {boarder}"
        >
          <h1 class="text-white text-2xl font-light">{duration}</h1>
          <h2 class="text-white text-6xl font-bold mt-3">{price}</h2>
          <div class="p-10">
            <ul
              class="text-white font-medium text-sm leading-8 text-justify list-image-[url('/Assets/icons/icons8-done.svg')]"
            >
              <li
                class="lg:hover:underline decoration-blue-600 underline-offset-4"
              >
                HD/FHD/4K/8K Quality
              </li>
              <li
                class="lg:hover:underline decoration-blue-600 underline-offset-4"
              >
                +15.000 Channels
              </li>
              <li
                class="lg:hover:underline decoration-blue-600 underline-offset-4"
              >
                +100.000 VOD Updatable
              </li>
              <li
                class="lg:hover:underline decoration-blue-600 underline-offset-4"
              >
                Watch from 115 Countries
              </li>
              <li
                class="lg:hover:underline decoration-blue-600 underline-offset-4"
              >
                Refund Supported
              </li>
              <li
                class="lg:hover:underline decoration-blue-600 underline-offset-4"
              >
                Support 24/7
              </li>
            </ul>
          </div>
          <div>
            <Test />
            <h1
              class="text-white mt-5 font-medium text-[15px] flex justify-center"
            >
              Ready In 5-10min
            </h1>
            <div class="mt-4 flex whitespace-nowrap space-x-2 justify-center">
              <img src={icon.icon4.path} alt="" />
              <img src={icon.icon5.path} alt="" />
              <img src={icon.icon6.path} alt="" />
              <img src={icon.icon7.path} alt="" />
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</main>