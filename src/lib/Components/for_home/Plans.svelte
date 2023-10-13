<script lang="ts">
  import { icon } from "../../images";
  import Test from "../../../routes/test.svelte";

  const cards = [
    {
      duration: "1 Month",
      price: "$14.99",
      color: "#1c031c",
      boarder: "1.8px solid #3F1D38",
      pop: "",
    },
    {
      duration: "3 Month",
      price: "$25.99",
      color: "#1c031c",
      boarder: "1.8px solid #3F1D38",
      pop: "",
    },
    {
      duration: "6 Month",
      price: "$39.99",
      color: "black",
      boarder: "1.8px solid #ff9900",
      pop: "Most Popular",
    },
    {
      duration: "12 Month",
      price: "$59.99",
      color: "#1c031c",
      boarder: "1.8px solid #3F1D38",
      pop: "",
    },
  ];
  const features = [
    { name: "HD/FHD/4K/8K Quality" },
    { name: "+15.000 Channels" },
    { name: "+100.000 VOD Updatable" },
    { name: "Watch from 115 Countries" },
    { name: "Refund Supported" },
    { name: "24/7 Support" },
  ];
</script>

<section id="plans">
  <h1
    class="md:text-4xl text-2xl flex justify-center text-white font-extrabold"
  >
    Choose Your Plan
  </h1>

  <div
    class="flex xl:flex-row xl:flex-nowrap flex-wrap overflow-x-hidden justify-center mt-5 md:space-x-16"
  >
    {#each cards as { duration, price, color, boarder, pop }}
      <div class="md:p-4 md:w-[300px] mx-3 py-3">
        <div
          class="h-[580px] w-[300px] rounded-xl p-5 pt-5 flex flex-col justify-center items-center"
          style="background-color: {color}; border: {boarder}"
        >
          <h1 class="text-white text-2xl font-bold">{duration}</h1>
          <h1 class="text-red-700 pt-2 text-2xl font-Fugaz">{pop}</h1>
          <h2 class="text-white text-5xl mt-3 font-bold">{price}</h2>
          <div class="p-10">
            <ul
              class="text-white font-medium text-sm leading-8 text-justify list-image-[url('/Assets/icons/icons8-done.svg')]"
            >
              {#each features as { name }}
                <li
                  class="lg:hover:underline decoration-blue-600 underline-offset-4"
                >
                  {name}
                </li>
              {/each}
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
              <img src={icon.icon4.path} alt="android" />
              <img src={icon.icon5.path} alt="apple" />
              <img src={icon.icon6.path} alt="smart tv" />
              <img src={icon.icon7.path} alt="desktop" />
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
