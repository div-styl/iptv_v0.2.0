<script>
  import { images, channels } from "../../images";
</script>

<main
  class="flex whitespace-no-wrap overflow-x-hidden pb-6 object-none h-50 w-90"
>
  <div class="relative">
    <ul class="flex animate-marquee">
      {#each Object.values(channels) as channel (channel.id)}
        <div class="w-40 h-40 mx-3">
          <img
            src={channel.path}
            alt={`Image ${channel.id}`}
            class="w-full h-full bg-cover bg-center"
          />
        </div>
      {/each}
      {#each Object.values(channels) as channel (channel.id)}
        <div class="w-40 h-40 mx-3">
          <img
            src={channel.path}
            alt={`Image ${channel.id}`}
            class="w-full h-full bg-cover bg-center"
          />
        </div>
      {/each}
      <!-- !duplicate for continuous looping -->
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
</main>
