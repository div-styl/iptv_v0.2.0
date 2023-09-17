<script>
  // import companates
  import Infomobile from "./infomobile.svelte";

  
   let first_name;
   let last_name;
   let email;
   let subject;
   let message;
  

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
    first_name: first_name.value,
    last_name: last_name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };
  
    try {
      const response = await fetch("https://flaks-form.onrender.com/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle successful submission, e.g., show a success message
        console.log("db rak nadi");
        alert(JSON.stringify(data));
      } else {
        // Handle errors, e.g., show an error message
        console.error("ach ahd lkhra");
        
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
</script>

<section class="flex justify-center">
  <form
    on:submit|preventDefault={handleSubmit}
    class=" md:w-[500px] w-11/12 bg-[#1c031c] p-5 rounded-xl flex flex-col gap-6 border border-[#FF8913]"
  >
    <div class="flex flex-row gap-4">
      <label for="first_name" class="text-gray-300">
        First Name
        <input
          type="text"
          name="first_name"
          bind:this={first_name}
          placeholder="Fist Name"
          class="text-black mt-1 w-full px-3 py-2 border border-gray-300 bg-gray-200 rounded-md"
        />
      </label>
      <label for="last_name" class="text-gray-300">
        Last Name
        <input
          type="text"
          name="last_name"
          bind:this={last_name}
          placeholder="Last Name"
          class="text-black mt-1 w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200"
        />
      </label>
    </div>
    <label for="email" class="text-gray-300">
      Email
      <input
        type="email"
        name="email"
        bind:this={email}
        placeholder="Email"
        class="text-black mt-1 w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200"
      />
    </label>

    <label for="subject" class="text-gray-300">
      Subject
      <input
        type="text"
        name="subject"
        bind:this={subject}
        placeholder="Subject"
        class="text-black mt-1 w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200"
      />
    </label>

    <label for="text" class="text-gray-300">
      Message
      <textarea
        name="message"
        bind:this={message}
        placeholder="Message"
        class="text-black mt-1 w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200"
      />
    </label>
    <button
      type="submit"
      class="bg-[#FF8913] text-black py-2 px-3 rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-700 transition"
    >
      Send
    </button>
    <Infomobile />
  </form>
</section>
