<script>
  import { images } from "../../images";
  import Marquee from "svelte-fast-marquee";
  let gomovie = true;
  let loop = 100;
</script>

<article class="flex whitespace-no-wrap overflow-x-hidden">
  <div class="relative">
    <Marquee pauseOnHover={true} speed={100} play={gomovie}>
      {#each Array(loop) as _}
      {#each Object.values(images) as image (image.id)}
        <div class="h-50 w-60 mx-3">
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
