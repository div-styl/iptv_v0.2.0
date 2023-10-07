<script>
  import { images } from "../../images";
  import Marquee from "svelte-fast-marquee";
  import { onMount } from "svelte";
  let gomovie = true;
  let loop = 20;


  onMount(() => {
    // Preload images when the component mounts
    Object.values(images).forEach(image => {
      const img = new Image();
      img.src = image.path;
    });
  });
</script>

<article>
  <div class="relative">
    <Marquee pauseOnHover={true} speed={100} play={gomovie}>
      {#each Array(loop) as _}
        {#each Object.values(images) as image (image.id)}
          {#if image.path}
            <div class="h-50 w-60 mx-3">
              <img
                src={image.path}
                alt={`Image ${image.id}`}
                class="w-full h-full bg-cover bg-center"
              />
            </div>
          {/if}
        {/each}
      {/each}
    </Marquee>
  </div>
</article>