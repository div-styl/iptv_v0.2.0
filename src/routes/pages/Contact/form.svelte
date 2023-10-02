<script>
  import Infomobile from "./infomobile.svelte";
  import Statusform from "./statusform.svelte";

  
  const valueDefaults = {
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  };

  let values = { ...valueDefaults };
  let isFormSubmitted = false;
  let isFormSuccess = true;

  const resetForm = () => {
    // Optionally, reset the form fields
    document.querySelector("form").reset();

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
        console.log(JSON.stringify(values));
        // prompt the success message
        isFormSuccess = true;
        isFormSubmitted = true;
        // Reset the form
        resetForm();
      } else {
        // Handle errors, e.g., show an error message
        console.error("Hold on, there is an error in the form");
        // prompt the msg error
        isFormSuccess = false;
        isFormSubmitted = true;
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
    action="\Contact"
    on:submit|preventDefault={addVendorTest}
    class=" md:w-[500px] w-11/12 bg-[#1c031c] p-5 rounded-xl flex flex-col gap-6 border border-[#FF8913]"
  >
    <div class="flex flex-row gap-4">
      <label for="first_name" class="text-gray-300 uppercase font-semibold">
        First Name
        <input
          required
          type="text"
          name="first_name"
          bind:value={values.first_name}
          placeholder="Fist Name"
          class="bg-gray-200 text-black border border-gray-200 rounded-md w-full mt-1 py-2 px-4
          focus:outline-none focus:bg-white focus:border-[#FF8913] font-medium"
        />
      </label>
      <label for="last_name" class="text-gray-300 uppercase font-semibold">
        Last Name
        <input
          type="text"
          required
          name="last_name"
          bind:value={values.last_name}
          placeholder="Last Name"
          class="bg-gray-200 text-black border border-gray-200 rounded-md w-full mt-1 py-2 px-4
          focus:outline-none focus:bg-white focus:border-[#FF8913] font-medium"
        />
      </label>
    </div>
    <label for="email" class="text-gray-300 uppercase font-semibold">
      Email
      <input
        required
        type="email"
        name="email"
        bind:value={values.email}
        placeholder="Email"
        class="bg-gray-200 text-black border border-gray-200 rounded-md w-full mt-1 py-2 px-4
          focus:outline-none focus:bg-white focus:border-[#FF8913] font-medium"
      />
    </label>

    <label for="subject" class="text-gray-300 uppercase font-semibold">
      Subject
      <input
        required
        type="text"
        name="subject"
        bind:value={values.subject}
        placeholder="Subject"
        class="bg-gray-200 text-black border border-gray-200 rounded-md w-full mt-1 py-2 px-4
          focus:outline-none focus:bg-white focus:border-[#FF8913] font-medium"
      />
    </label>

    <label for="text" class="text-gray-300 uppercase font-semibold">
      Message
      <textarea
        name="message"
        required
        bind:value={values.message}
        placeholder="Message"
        class="bg-gray-200 text-black border border-gray-200 rounded-md w-full mt-1 py-2 px-4
          focus:outline-none focus:bg-white focus:border-[#FF8913] font-medium"
      />
    </label>
    <Statusform {isFormSubmitted} {isFormSuccess} />
    <button
      type="submit"
      class="bg-[#FF8913] text-black font-bold py-2 px-3 rounded-md focus:outline-none focus:bg-green-500 transition"
    >
      Send
    </button>

    <Infomobile />
  </form>
</section>
