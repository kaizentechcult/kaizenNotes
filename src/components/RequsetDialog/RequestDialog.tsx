import { For, createEffect, createSignal } from "solid-js";
// import { BiCross } from "solid-icons/bi";
import toast from "solid-toast";
import { toggleVisibility } from "../../hooks/common";
interface RequestForm {
  name?: string;
  data: string;
}

const RequestDialog = () => {
  const [formInputs, setFormInputs] = createSignal<RequestForm>({
    name: "",
    data: "",
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
      data: target.value,
    }));
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const { name, data } = formInputs();
    if (!name || !data) {
      if (!name) {
        toast.error("Name is required");
      }
      if (!data) {
        toast.error("Please enter your message");
      }
      return;
    }
    console.log(formInputs());
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(formInputs());

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    const apiKey = import.meta.env.VITE_BASE_URL;
    fetch(`${apiKey}/api/request`, requestOptions as RequestInit)
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
        throw new Error("Something wrong occured, Try again later!");
      })
      .then((result) => {
        console.log(result);
        toast.success("Request sent successfully!");
        setFormInputs({
          name: "",
          data: "",
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Something wrong occured, Try again later!");
      })
      .finally(() => {
        toggleVisibility();
      });
  };

  createEffect(() => {
    console.log(formInputs());
  });
  return (
    <div class="relative">
      <button
        type="button"
        class="absolute top-0 right-0 p-2 bg-gray-200 rounded-full"
        onClick={toggleVisibility}
      >
        {/* <BiCross /> */}
        x
      </button>
      <form
        onSubmit={handleSubmit}
        class="flex flex-col gap-5 p-5 border border-gray-300 rounded"
      >
        <div class="text-3xl">Something missing?</div>
        <div class="text-md">
          Let us know by submitting a request. We will review it and add it to
          the website as soon as possible.
        </div>
        <input
          type="text"
          placeholder="Name"
          value={formInputs().name}
          onInput={handleNameChange}
          class="p-2 border border-gray-300 rounded w-full"
        />
        <textarea
          placeholder="Message"
          value={formInputs().data}
          onInput={handleMessageChange}
          class="p-2 border border-gray-300 rounded w-full h-40"
        />
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RequestDialog;
