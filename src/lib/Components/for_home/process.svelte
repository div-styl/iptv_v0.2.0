<script>
    import { datausr } from "../../../routes/pages/Contact/data";
    import { icon } from "../../images";
</script>

<h1 class="md:text-4xl text-2xl flex justify-center text-white font-extrabold">
  How Things Work
</h1>

<main class="md:flex md:flex-row mx-4 lg:flex justify-center items-center pt-5 ">
  <!-- !step one -->
  <div
    class="bg-[#3f323f] p-10 rounded-lg max-w-md max-h-96 m-10 md:max-h-[580px]
     text-white flex items-center"
  >
    <div class="flex flex-col justify-start">
      <img src={icon.cart.path} alt="cart" class="w-[50px] h-[50px] flex justify-center items-center">
      <h1 class="md:text-3xl text-2xl font-bold">1. Place Your Order</h1>
      <p class="text-sm pt-3 font-medium leading-relaxed">
        Place your order by choosing your preferred subscription period : <br /> 1,
        3, 6 Months or 1 Year. Note: You will get a free month no matter what plan
        you choose.
      </p>
    </div>
  </div>

  <!-- !step two -->

  <div
    class="bg-[#3f323f] p-10 rounded-lg max-w-md m-10  
   text-white flex items-center"
  >
    <div class="flex flex-col justify-start">
      <img src={icon.avatar.path} alt="avatar" class="w-[50px] h-[50px] flex justify-center items-center">
      <h1 class="md:text-3xl text-2xl font-bold">2. Get Your Account</h1>
      <p class="text-sm pt-3 font-medium leading-relaxed">
        This process can take 15 to 30 minutes. Please check your inbox and your
        spam folder. <br />
        To speed up the process, please contact us via
        <span class="font-bold"> Whatsapp.</span>
      </p>
    </div>
  </div>

  <!-- !step three -->

  <div
    class="bg-[#3f323f] p-[23px] rounded-lg max-w-md  m-10 
 text-white flex items-center"
  >
    <div class="flex flex-col justify-start">
      <img src={icon.icon2.path} alt="tv" class="w-[50px] h-[50px] flex justify-center items-center">
      <h1 class="md:text-3xl text-2xl font-bold">
        3. Enjoy Your IPTV Service!
      </h1>
      <p class="text-sm pt-3 font-medium leading-relaxed">
        Enjoy all Channels, Movies, Series and Live TV.
      </p>
     <div class="flex justify-start items-start gap-5 pt-5"> 
      <button class="bg-[#661eff] rounded-md flex justify-center p-3 text-white">
        <a href={datausr[1].myurl} class="max-w-1">Free Trail</a>
      </button>
     </div>
    </div>
  </div>
</main>
