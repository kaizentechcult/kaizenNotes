import { Component, createSignal, For, Show } from "solid-js";
import fileData from "../../../files.json";
import Navbar from "../../components/Navbar/Navbar";

type File = {
  name: string;
  size: number;
  path: string;
};

const Notes: Component = () => {

  const apiKey = import.meta.env.VITE_BASE_URL;
  const [loading, setLoading] = createSignal<Boolean>()
  const [data, setData] = createSignal<File[]>(fileData);
  const [loaderName, setLoaderName] = createSignal<string>();
  const [filteredData, setFilteredData] = createSignal<File[]>(fileData);
  const [years, setYears] = createSignal<string[]>([]);
  const [subjects, setSubjects] = createSignal<string[]>([]);
  const [selectedYear, setSelectedYear] = createSignal<string | null>(null);
  const [selectedSubject, setSelectedSubject] = createSignal<string | null>(
    null
  );

  const handlePreview = async (name: string) => {
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



  const formatFileSize = (bytes: number) => {
    if (bytes === null || bytes === undefined) return "";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  // Extract unique years and subjects dynamically
  const extractYearsAndSubjects = () => {
    const yearsSet = new Set<string>();
    const subjectsSet = new Set<string>();

    fileData.forEach((file) => {
      const parts = file.path.split("/");
      // console.log(parts);
      if (parts.length > 1) {
        yearsSet.add(parts[1]); // Extract Year
      }
      if (parts.length > 1) {
        subjectsSet.add(parts[2]); // Extract Subject
      }
    });

    setYears(Array.from(yearsSet));
    setSubjects(Array.from(subjectsSet));
  };

  // Filter the data based on selected year and subject
  const filterFiles = () => {
    let filtered = fileData;

    if (selectedYear()) {
      filtered = filtered.filter((file) =>
        file.path.startsWith(`/${selectedYear()}`)
      );
    }

    if (selectedSubject()) {
      filtered = filtered.filter((file) =>
        file.path.includes(`/${selectedSubject()}`)
      );
    }

    setFilteredData(filtered);
  };

  // Initialize years and subjects on mount
  extractYearsAndSubjects();

  return (
    <>
      <Navbar />
      <div class="max-w-4xl mx-auto p-6 pt-20">
        <div class="bg-secondary shadow-md rounded-xl p-6">
          <h2 class="text-2xl font-semibold text-from mb-6">File List</h2>

          {/* Filters */}
          <div class="mb-6 space-y-6">
            {/* Year Selector */}
            <div class="text-black">
              <label
                for="year"
                class="block text-sm font-medium text-white mb-2"
              >
                Select Year
              </label>
              <select
                id="year"
                class="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-500 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out"
                onInput={(e) => {
                  setSelectedYear(
                    (e.target as HTMLSelectElement).value || null
                  );
                  filterFiles();
                }}
              >
                <option value="">All Years</option>
                <For each={years()}>
                  {(year) => <option value={year}>{year}</option>}
                </For>
              </select>
            </div>

            {/* Subject Selector */}
            <div class="text-black">
              <label
                for="subject"
                class="block text-sm font-medium text-white mb-2"
              >
                Select Subject
              </label>
              <select
                id="subject"
                class="mt-1 block w-full p-3 bg-gray-800 text-white border border-gray-500 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out"
                onInput={(e) => {
                  setSelectedSubject(
                    (e.target as HTMLSelectElement).value || null
                  );
                  filterFiles();
                }}
              >
                <option value="">All Subjects</option>
                <For each={subjects()}>
                  {(subject) => <option value={subject}>{subject}</option>}
                </For>
              </select>
            </div>
          </div>

          {/* File List */}
          <Show
            when={filteredData().length > 0}
            fallback={<p class="text-center text-gray-500">No files found</p>}
          >
            <div class="space-y-4">
              <For each={filteredData()}>
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
                      <p class="text-lg font-semibold truncate">{item.name}</p>
                      {/* <p class="text-sm truncate">{item.path}</p> */}
                    </div>
                    <div class="text-sm">{formatFileSize(item.size)}</div>
                    <button
                      onClick={() => handlePreview(item.name)}
                      class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {loading() && loaderName() == item.name ? (
                        <p>Loading</p>
                      ) : (
                        <p>Preview</p>
                      )}
                    </button>
                  </div>
                )}
              </For>
            </div>
          </Show>
        </div>
      </div>
    </>
  );
};

export default Notes;
