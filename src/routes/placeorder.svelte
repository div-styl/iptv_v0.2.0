<script lang="ts">
  import { createDialog, melt } from "@melt-ui/svelte";
  /*!for radio*/
  const radio_data = [
    { name: "Phone", type: "phone" },
    { name: "Tv", type: "Tv" },
    { name: "Tablet", type: "Tablet" },
  ];
  //for data form
  const data = {
    full_name: "",
    email: "",
    device_type: "",
    device_name: "",
    plan: "",
    message: "",
  };

  let values = { ...data };

  const resetForm = () => {
    // Optionally, reset the form fields
    document.querySelector("form").reset();
    // Reset 'values' to default values
    values = { ...data };
  };

  //melt-ui
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

  // sending the data to the server
  const placeholder = async (event) => {
    event.preventDefault();

    try {
      const callapi = await fetch("https://iptv-contactform.vercel.app/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.parse(JSON.stringify(values, null, 4)),
      });
      const response = await callapi.json();
      console.log("API Response:", response);

      if (callapi.ok) {
        console.log("done well");
      } else {
        console.error("The order is not placed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
      class="fixed left-[50%] top-[50%] z-50 max-h-[100vh] w-[90vw]
              max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-gray-50
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
      <p use:melt={$description} class="mb-5 mt-2 leading-normal text-black">
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
        <div class="pt-4">
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
        </div>
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
            <label
              for={type}
              class="text-black uppercase font-semibold px-3 block"
            >
              {name}
            </label>
          {/each}
        </fieldset>
        <!-- ! device name -->
        <div class="pt-5">
          <label
            for="device_name"
            class="text-black uppercase font-semibold pt-3"
          >
            device name
            <input
              required
              bind:value={data.device_name}
              type="device_name"
              name="device name"
              placeholder="device name"
              class="bg-gray-200 text-black border border-gray-200 rounded-md w-full mt-1 py-2 px-4
            focus:outline-none focus:bg-white focus:border-[#FF8913] font-medium"
            />
          </label>
        </div>
        <!-- ! select plan -->
        <fieldset>
          <label
            for="countries"
            class="text-black uppercase font-semibold pt-3 block"
            >Select The Plan</label
          >
          <select
            name="plan"
            required
            bind:value={data.plan}
            class="text-black uppercase font-semibold
          border rounded-md focus:border-[#FF8913] focus:bg-white bg-gray-200"
          >
            <option value="1 Month">1 Month</option>
            <option value="3 Months">3 Months</option>
            <option value="6 Months">6 Months</option>
            <option value="12 Months">12 Months</option>
          </select>
        </fieldset>
        <div class="pt-4">
          <label for="message" class="text-black uppercase font-semibold block"
            >Your message</label
          >
          <textarea
            rows="2"
            name="message"
            bind:value={data.message}
            class="block p-3 w-full text-sm text-black rounded-md border focus:outline-1 focus:outline-[#FF8913] focus:bg-white bg-gray-200"
            placeholder="Anything you would like to add to the order..."
          />
        </div>
        <!-- ! the close button -->
        <div class="mt-6 flex justify-end gap-4">
          <button
            use:melt={$close}
            class="inline-flex h-8 items-center justify-center rounded-md
                            bg-gray-300 px-4 font-medium leading-none text-black hover:ring-2 hover:ring-orange-500"
          >
            Cancel
          </button>
          <!-- ! the save button -->
          <button
            type="submit"
            class="inline-flex h-8 items-center justify-center rounded-md
                            bg-gray-300 px-4 font-medium leading-none text-black hover:ring-2 hover:ring-orange-500"
          >
            Place The Order
          </button>
        </div>
      </form>
    </div>
  {/if}
</div>
