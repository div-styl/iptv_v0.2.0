<script>
  import { channels } from "../../images";
  import Marquee from "svelte-fast-marquee";
  let gomovie = true;
  let loop = 20;
</script>

<article class="flex whitespace-no-wrap overflow-x-hidden">
  <div class="relative">
    <Marquee pauseOnHover={true} speed={100} play={gomovie}>
      {#each Array(loop) as _}
        {#each Object.values(channels) as image (image.id)}
          <div class="h-40 w-40 mx-4">
            <img
              src={image.path}
              alt={`Image ${image.id}`}
              class="w-full h-full bg-cover bg-center"
            />
          </div>
        {/each}
      {/each}
    </Marquee>
  </div>
</article>
