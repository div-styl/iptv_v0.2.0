<script>
  import { images } from "../../images";
  import Marquee from "svelte-fast-marquee";
  let gomovie = true;
  let loop = 10;
</script>

<section>
  <div class="relative">
    <Marquee pauseOnHover={true} speed={40} play={gomovie}>
      {#each Array(loop) as _}
        {#each Object.values(images) as image (image.id)}
          <div class="h-50 w-60 mx-3">
            <img
              src={image.path}
              alt={`Image ${image.id}`}
              class="w-[240px] h-[400px] object-contain aspect-auto"
            />
          </div>
        {/each}
      {/each}
    </Marquee>
  </div>
</section>
