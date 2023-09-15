<script>
  import { datausr } from "./data";
</script>

<div class="gap-9">
  <h1
    class="md:hidden text-white text-2xl
    flex justify-center hover:text-[#FF8913] md:hover:underline underline-offset-4"
  >
    OR
  </h1>
  <section class="md:hidden flex justify-center pt-10">
    {#each datausr as data}
      <div class="items-center mb-2">
        <a href={data.myurl} target="_blank">
          <img src={data.path} alt="" class="mr-2 w-10" />
        </a>
      </div>
    {/each}
  </section>
</div>
