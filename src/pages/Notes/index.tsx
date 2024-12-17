import { Component, createSignal, For, onMount } from "solid-js";
import fileData from "../../../files.json";
import Navbar from "../../components/Navbar/Navbar";

type File = {
  name: string;
  size: number;
  path: string;
};

const Notes: Component = () => {
  const apiKey = import.meta.env.VITE_BASE_URL;
  const [data, setData] = createSignal<File[]>([]);
  const [loading, setLoading] = createSignal<Boolean>();
  const [loaderName, setLoaderName] = createSignal<string>();

  // Helper function to format file size
  const formatFileSize = (bytes: number) => {
    if (bytes === null || bytes === undefined) return "";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  setData(fileData);
  // onMount(async () => {
  //   try {
  //     const res = await fetch(`${apiKey}/mega/files`);
  //     if (!res.ok) {
  //       throw new Error(`Failed to fetch data: ${res.statusText}`);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // });

  const handleSubmit = async (name: string) => {
    // e.preventDefault();
    try {
      setLoading(true);
      setLoaderName(name);
      const res = await fetch(
        `${apiKey}/mega/download-link/${encodeURIComponent(name)}`
      );
      if (res.ok) {
        const result = await res.json();
        const FileLink = result.downloadLink;

        const link = document.createElement("a");
        link.href = FileLink;
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
        document.body.appendChild(link);
        link.dispatchEvent(
          new MouseEvent("click", { bubbles: true, cancelable: true })
        );
        link.remove();
      } else {
        throw new Error(`Failed to fetch data: ${res.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div class="max-w-4xl mx-auto p-6 pt-20">
        {/* <div class="bg-primary text-accent shadow-md rounded-xl p-6 mb-6">
        <h1 class="text-3xl font-bold  mb-4">File Management</h1>
      </div> */}

        <div class="bg-secondary shadow-md rounded-xl p-6">
          <h2 class="text-2xl font-semibold text-from mb-6">File List</h2>
          {data().length > 0 ? (
            <div class="space-y-4">
              <For each={data()}>
                {(item) => (
                  <div class="bg-primary text-blue-100 transition-colors duration-300 rounded-lg p-4 flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div class="flex-grow min-w-0">
                      <p class="text-lg font-semibold  truncate">{item.name}</p>
                      <p class="text-sm  truncate">{item.path}</p>
                    </div>
                    <div class="text-sm ">{formatFileSize(item.size)}</div>
                    <button
                      onClick={() => handleSubmit(item.name)}
                      class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {loading() && loaderName() == item.name ? (
                        <p>Loading</p>
                      ) : (
                        <p>Download</p>
                      )}
                    </button>
                  </div>
                )}
              </For>
            </div>
          ) : (
            <p class="text-center text-gray-500">Loading</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Notes;
