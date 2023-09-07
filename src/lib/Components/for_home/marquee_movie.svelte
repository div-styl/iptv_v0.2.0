<script>
  import { images, channels } from "../../images";
</script>

<article
  class="flex whitespace-no-wrap overflow-x-hidden pb-6 object-none h-50 w-90 "
>
  <div class="relative">
    <ul class="flex animate-marquee">
      {#each Object.values(channels) as channel (channel.id)}
        <div class="w-40 h-40 mx-2">
          <img
            src={channel.path}
            alt={`Image ${channel.id}`}
            class="w-full h-full bg-cover bg-center"
          />
        </div>
      {/each}
      {#each Object.values(channels) as channel (channel.id)}
        <div class="w-40 h-40 mx-2">
          <img
            src={channel.path}
            alt={`Image ${channel.id}`}
            class="w-full h-full bg-cover bg-center"
          />
        </div>
      {/each}
    </ul>
  </div>
</article>

<article class="flex whitespace-no-wrap overflow-x-hidden pt-6 ">
  <div class="relative">
    <ul class="flex animate-marquee">
      {#each Object.values(images) as image (image.id)}
        <div class="h-50 w-60 mx-2">
          <img
            src={image.path}
            alt={`Image ${image.id}`}
            class="w-full h-full bg-cover bg-center"
          />
        </div>
      {/each}
      <!-- ! duplicate for continuous looping -->
      {#each Object.values(images) as image (image.id)}
        <div class="h-50 w-60 mx-2">
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
