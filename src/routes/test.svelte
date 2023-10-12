<script lang="ts">
  import { createDialog, melt } from "@melt-ui/svelte";

  const radio_data = [
    {name: "Phone", type: "phone"},
    {name: "Tv", type: "Tv"},
    {name: "Tablet", type: "Tablet"}
  ];
  const data = {
    full_name: "",
    email: "",
    device_type: "",
  };

  const {
    elements: {
      trigger,
      overlay,
      content,
      title,
      description,
      close,
      portalled,
    },
    states: { open },
  } = createDialog({
    forceVisible: true,
  });
  const placeholder = async (event) => {
    event.preventDefault();
    const datajson = JSON.stringify(data);
    console.log(datajson);
    alert(datajson);
  };
</script>

<button
  use:melt={$trigger}
  class="bg-[#ff9900] rounded-md px-4 py-3 flex justify-center lg:hover:bg-[#ff9900]/70 text-black text-xl font-bold"
>
  Buy Now
</button>

<div use:melt={$portalled}>
  {#if $open}
    <div use:melt={$overlay} class="fixed inset-0 z-50 bg-black/50" />
    <!-- ! the container of the dialog only -->
    <div
      class="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw]
              max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white
              p-6 shadow-lg"
      use:melt={$content}
    >
      <!-- ! the title -->
      <h2
        use:melt={$title}
        class="flex justify-center text-lg font-bold text-black"
      >
        Buying Form
      </h2>
      <!-- ! simple text for the display to the user -->
      <p use:melt={$description} class="mb-5 mt-2 leading-normal text-zinc-600">
        This Form meant to collect some information for preparing your order.
      </p>
      <!-- ! the form -->
      <form action="POST" on:submit|preventDefault={placeholder}>
        <label for="full_name" class="text-black uppercase font-semibold">
          Full Name
          <input
            required
            bind:value={data.full_name}
            type="text"
            name="full_name"
            placeholder="Full Name"
            class="bg-gray-200 text-black border border-gray-200 rounded-md w-full mt-1 py-2 px-4
              focus:outline-none focus:bg-white focus:border-[#FF8913] font-medium"
          />
        </label>
        <label for="email" class="text-black uppercase font-semibold">
          Email
          <input
            required
            bind:value={data.email}
            type="email"
            name="email"
            placeholder="Email"
            class="bg-gray-200 text-black border border-gray-200 rounded-md w-full mt-1 py-2 px-4
              focus:outline-none focus:bg-white focus:border-[#FF8913] font-medium"
          />
        </label>
        <!-- ! the radio -->
        <fieldset class="flex flex-row pt-3">
          {#each radio_data as { name, type }}
            <input
              type="radio"
              id={type}
              name="device_type"
              value={type}
              bind:group={data.device_type}
            />
            <label for={type} class="text-black uppercase font-semibold px-3">
              {name}
            </label>
          {/each}
        </fieldset>

        <!-- ! the close button -->
        <div class="mt-6 flex justify-end gap-4">
          <button
            use:melt={$close}
            class="inline-flex h-8 items-center justify-center rounded-sm
                            bg-zinc-100 px-4 font-medium leading-none text-zinc-600"
          >
            Cancel
          </button>
          <!-- ! the save button -->
          <button
            type="submit"
            class="inline-flex h-8 items-center justify-center rounded-sm
                            bg-magnum-100 px-4 font-medium leading-none text-magnum-900"
          >
            Place The Order
          </button>
        </div>
      </form>
    </div>
  {/if}
</div>
