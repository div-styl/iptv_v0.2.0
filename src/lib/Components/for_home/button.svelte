<script>
 import { scrollTo } from 'svelte-scrolling'
</script>



<!-- This component only encapsulates the styles, u can add new logic in the scrip tag. -->
<button use:scrollTo={{ref: 'plans', duration: 700}}
  class="bg-[#651effb9] rounded-xl  
  flex items-center font-medium text-[20px] p-3
  text-white "
  {...$$restProps}
>
  <slot />
</button>
