<script>
  import { images, channels } from "../../images";
</script>



<article
  class="flex whitespace-no-wrap overflow-x-hidden  "
>
  <div class="relative">
    <ul class="flex animate-marquee">
      {#each Object.values(images) as image (image.id)}
        <div class="h-50 w-60 mx-3">
          <img
            src={image.path}
            alt={`Image ${image.id}`}
            class="w-full h-full bg-cover bg-center"
          />
        </div>
      {/each}
      <!-- ! duplicate for continuous looping -->
      {#each Object.values(images) as image (image.id)}
        <div class="h-50 w-60 mx-3">
          <img
            src={image.path}
            alt={`Image ${image.id}`}
            class="w-full h-full bg-cover bg-center"
          />
        </div>
      {/each}
    </ul>
  </div>
</article>

