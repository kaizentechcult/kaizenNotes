import { For, createEffect, createSignal } from "solid-js";
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

  return (
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="relative bg-white dark:bg-secondary rounded-lg shadow-xl w-full max-w-md transform transition-all">
        <button
          type="button"
          class="absolute top-3 right-3 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          onClick={toggleVisibility}
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="p-6">
          <h3 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            Something missing?
          </h3>
          <p class="text-gray-500 dark:text-gray-300 mb-6">
            Let us know by submitting a request. We will review it and add it to
            the website as soon as possible.
          </p>

          <form onSubmit={handleSubmit} class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={formInputs().name}
                onInput={handleNameChange}
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 
                       dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Message
              </label>
              <textarea
                placeholder="Describe what you're looking for..."
                value={formInputs().data}
                onInput={handleMessageChange}
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm 
                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 
                       dark:text-white placeholder-gray-400 dark:placeholder-gray-300 h-32 resize-none"
              />
            </div>

            <button
              type="submit"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-md
                     shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 
                     focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestDialog;
