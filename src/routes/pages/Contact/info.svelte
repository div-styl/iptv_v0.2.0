<script>
  import { datausr } from "./data";
</script>

<section class="hidden md:flex flex-col items-start leading-8 p-10">
  {#each datausr as data}
    <div class="flex flex-row items-center mb-2">
      <img  src={data.path} alt="" class="mr-2 md:w-14 " />
      <div class="flex-wrap">
        <h1 class="text-2xl font-bold text-white">
          <a href={data.myurl}>{data.title}</a>
        </h1>
      </div>
    </div>
  {/each}
</section>
