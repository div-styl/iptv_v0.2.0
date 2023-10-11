<script>
  //import { scrollTo } from 'svelte-scrolling'
  export function handleAnchorClick(event) {
    event.preventDefault();

    // Replace the href with the id of the plans section
    const anchorId = "plans";
    const anchor = document.getElementById(anchorId);

    // if (anchor) {
    //   window.scrollTo({
    //     top: anchor.offsetTop,
    //     behavior: "smooth",
    //   });
    // }
    setTimeout(() => {
      window.scrollTo({
        top: anchor.offsetTop,
        behavior: "smooth",
      });
    }, 100);
  }
  //use:scrollTo={{ref: 'plans', duration: 700}}
</script>

<!-- This component only encapsulates the styles, u can add new logic in the scrip tag. -->
<button
  on:click={handleAnchorClick}
  class="bg-[#651effb9] rounded-xl
  flex items-center font-medium text-[20px] p-3
  text-white"
  {...$$restProps}
>
  <slot />
</button>
