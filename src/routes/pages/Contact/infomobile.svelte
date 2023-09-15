<script>
  import { datausr } from "./data";
</script>

<div class="gap-10">
  <h1
    class="md:hidden text-white text-2xl
    flex justify-center hover:text-[#FF8913] 
    md:hover:underline underline-offset-4 font-medium"
  >
    OR
  </h1>
  <section class="md:hidden flex justify-center pt-1">
    {#each datausr as data}
      <div class="items-center ">
        <a href={data.myurl} target="_blank">
          <img src={data.path} alt="" class="mx-2 w-14" />
        </a>
      </div>
    {/each}
  </section>
</div>
