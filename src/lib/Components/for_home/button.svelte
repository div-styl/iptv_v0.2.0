<script>
 import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling'
</script>



<!-- This component only encapsulates the styles, u can add new logic in the scrip tag. -->
<button use:scrollTo={{ref: 'plans', duration: 500}}
  class="bg-[#661eff] rounded-xl  
  flex items-center font-medium text-[20px] p-3
  text-white "
  {...$$restProps}
>
  <slot />
</button>
