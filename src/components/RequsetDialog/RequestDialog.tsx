import { createEffect, createSignal } from "solid-js";
import toast, { Toaster } from "solid-toast";

interface RequestForm {
  name?: string;
  message: string;
}

const RequestDialog = () => {
  const [formInputs, setFormInputs] = createSignal<RequestForm>({
    name: "",
    message: "",
  });

  const handleNameChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      name: target.value,
    }));
  };

  const handleMessageChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      message: target.value,
    }));
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log("toast");
    toast.success("Successfully saved!");
    setFormInputs({
      name: "",
      message: "",
    });
  };

  createEffect(() => {
    console.log(formInputs());
  });
  return (
    <form onSubmit={handleSubmit} class="flex flex-col gap-5">
      <div class="text-xl">Something missing?</div>
      <div class="text-md">Let us know by submitting a request.</div>
      <input
        type="text"
        placeholder="Name"
        value={formInputs().name}
        onInput={handleNameChange}
        class="mb-2 p-2 border border-gray-300 rounded"
      />
      <textarea
        placeholder="Message"
        value={formInputs().message}
        onInput={handleMessageChange}
        class="p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
      <Toaster position="bottom-right" />
    </form>
  );
};

export default RequestDialog;
