<script>
  let Email;
  let FName;
  let LName;
  let Subject;
  let Message;

  const submit = () => {
    const data = {
      Email: Email.value,
      FirstName: FName.value,
      LastName: LName.value,
      Subject: Subject.value,
      Message: Message.value,
    };

    alert(JSON.stringify(data));
  };
  import Infomobile from "./infomobile.svelte";
</script>

<section class="flex justify-center">
  <form
    on:submit|preventDefault={submit}
    class=" md:w-[500px] w-11/12 bg-[#1c031c] p-5 rounded-xl flex flex-col gap-6 border border-[#FF8913]"
  >
    <div class="flex flex-row gap-4">
      <label for="first_name" class="text-gray-300">
        First Name
        <input
          type="text"
          name="first_name"
          bind:this={FName}
          placeholder="Fist Name"
          class="text-black mt-1 w-full px-3 py-2 border border-gray-300 bg-gray-200 rounded-md"
        />
      </label>
      <label for="last_name" class="text-gray-300">
        Last Name
        <input
          type="text"
          name="last_name"
          bind:this={LName}
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
        bind:this={Email}
        placeholder="Email"
        class="text-black mt-1 w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200"
      />
    </label>

    <label for="subject" class="text-gray-300">
      Subject
      <input
        type="text"
        name="subject"
        bind:this={Subject}
        placeholder="Subject"
        class="text-black mt-1 w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200"
      />
    </label>

    <label for="text" class="text-gray-300">
      Message
      <textarea
        name="text"
        bind:this={Message}
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
