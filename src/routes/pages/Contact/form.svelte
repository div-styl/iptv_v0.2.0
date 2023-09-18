<script>
  import Infomobile from "./infomobile.svelte";
  const valueDefaults = {
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  };

  let values = { ...valueDefaults };

  const resetForm = () => {
    // Optionally, reset the form fields
    document.querySelector("form").reset()

    // Reset 'values' to default values
    values = { ...valueDefaults };
  };

  const addVendorTest = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://flaks-form.onrender.com/submit-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        // Handle successful submission, e.g., show a success message
        console.log("the form is sent to email owner");
        alert("Thank you for your submission!");

        // Reset the form
        resetForm();
      } else {
        // Handle errors, e.g., show an error message
        console.error("Hold on, there is an error in the form");

        // Reset the form
        resetForm();
      }
    } catch (error) {
      console.error("Error:", error);

      // Reset the form
      resetForm();
    }
  };
</script>

<section class="flex justify-center">
  <form
    on:submit|preventDefault={addVendorTest}
    class=" md:w-[500px] w-11/12 bg-[#1c031c] p-5 rounded-xl flex flex-col gap-6 border border-[#FF8913]"
  >
    <div class="flex flex-row gap-4">
      <label for="first_name" class="text-gray-300">
        First Name
        <input
          required
          type="text"
          name="first_name"
          bind:value={values.first_name}
          placeholder="Fist Name"
          class="text-black mt-1 w-full px-3 py-2 border border-gray-300 bg-gray-300 rounded-md"
        />
      </label>
      <label for="last_name" class="text-gray-300">
        Last Name
        <input
          type="text"
          required
          name="last_name"
          bind:value={values.last_name}
          placeholder="Last Name"
          class="text-black mt-1 w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-300"
        />
      </label>
    </div>
    <label for="email" class="text-gray-300">
      Email
      <input
        required
        type="email"
        name="email"
        bind:value={values.email}
        placeholder="Email"
        class="text-black mt-1 w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-300"
      />
    </label>

    <label for="subject" class="text-gray-300">
      Subject
      <input
        required
        type="text"
        name="subject"
        bind:value={values.subject}
        placeholder="Subject"
        class="text-black mt-1 w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-300"
      />
    </label>

    <label for="text" class="text-gray-300">
      Message
      <textarea
        name="message"
        required
        bind:value={values.message}
        placeholder="Message"
        class="text-black mt-1 w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-300"
      />
    </label>
    <button
      type="submit"
      class="bg-[#FF8913] text-black font-bold py-2 px-3 rounded-md focus:outline-none focus:bg-green-500 transition"
    >
      Send
    </button>
    <Infomobile />
  </form>
</section>
