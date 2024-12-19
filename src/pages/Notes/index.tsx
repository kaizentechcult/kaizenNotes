import { Component, createSignal, For, Show } from "solid-js";
import fileData from "../../../files.json";
import Navbar from "../../components/Navbar/Navbar";
import { loading, loaderName } from "../../hooks/common";
import { handlePreview } from "../../hooks/megaPreview";

type File = {
  name: string;
  size: number;
  path: string;
};

const Notes: Component = () => {
  const [filteredData, setFilteredData] = createSignal<File[]>(fileData);
  const [years, setYears] = createSignal<string[]>([]);
  const [subjects, setSubjects] = createSignal<string[]>([]);
  const [selectedYear, setSelectedYear] = createSignal<string | null>(null);
  const [selectedSubject, setSelectedSubject] = createSignal<string | null>(
    null
  );

  const formatFileSize = (bytes: number) => {
    if (bytes === null || bytes === undefined) return "";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const extractYearsAndSubjects = () => {
    const yearsSet = new Set<string>();
    const subjectsSet = new Set<string>();

    fileData.forEach((file) => {
      const parts = file.path.split("/");
      if (parts.length > 1) yearsSet.add(parts[1]);
      if (parts.length > 2) subjectsSet.add(parts[2]);
    });

    setYears(Array.from(yearsSet));
    setSubjects(Array.from(subjectsSet));
  };

  const filterFiles = () => {
    let filtered = fileData;

    if (selectedYear()) {
      filtered = filtered.filter((file) =>
        file.path.startsWith(`/${selectedYear()}`)
      );
    }

    const subjectsSet = new Set<string>();
    filtered.forEach((file) => {
      const parts = file.path.split("/");
      if (parts.length > 2) {
        subjectsSet.add(parts[2]);
      }
    });
    setSubjects(Array.from(subjectsSet));

    if (selectedSubject()) {
      filtered = filtered.filter((file) =>
        file.path.includes(`/${selectedSubject()}`)
      );
    }

    setFilteredData(filtered);
  };

  const handleYearChange = (e: Event) => {
    const year = (e.target as HTMLSelectElement).value || null;
    setSelectedYear(year);
    setSelectedSubject(null);
    filterFiles();
  };

  const handleSubjectChange = (e: Event) => {
    const subject = (e.target as HTMLSelectElement).value || null;
    setSelectedSubject(subject);
    filterFiles();
  };

  extractYearsAndSubjects();

  return (
    <>
      <Navbar />
      <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div class="space-y-8">
            {/* Header */}
            <div class="text-center">
              <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
                File Library
              </h1>
              <p class="mt-2 text-gray-600 dark:text-gray-400">
                Browse and preview your files
              </p>
            </div>

            {/* Filters */}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div class="relative">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Year
                </label>
                <select
                  onChange={handleYearChange}
                  class="block w-full pl-3 pr-10 py-3 text-base border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                >
                  <option value="">All Years</option>
                  <For each={years()}>
                    {(year) => <option value={year}>{year}</option>}
                  </For>
                </select>
              </div>

              <div class="relative">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <select
                  onChange={handleSubjectChange}
                  class="block w-full pl-3 pr-10 py-3 text-base border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                >
                  <option value="">All Subjects</option>
                  <For each={subjects()}>
                    {(subject) => <option value={subject}>{subject}</option>}
                  </For>
                </select>
              </div>
            </div>

            {/* File Grid */}
            <Show
              when={filteredData().length > 0}
              fallback={
                <div class="text-center py-12">
                  <div class="inline-block p-4 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                    <svg
                      class="h-8 w-8 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </div>
                  <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                    No files found
                  </h3>
                  <p class="mt-1 text-gray-500 dark:text-gray-400">
                    Try adjusting your filters
                  </p>
                </div>
              }
            >
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <For each={filteredData()}>
                  {(file) => (
                    <div class="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <div class="p-6">
                        <div class="flex items-center space-x-4">
                          <div class="flex-shrink-0">
                            <div class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                              <svg
                                class="w-6 h-6 text-blue-600 dark:text-blue-400"
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
                          </div>
                          <div class="flex-1 min-w-0">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white truncate">
                              {file.name}
                            </h3>
                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                              {formatFileSize(file.size)}
                            </p>
                          </div>
                        </div>
                        <div class="mt-6">
                          <button
                            onClick={() => handlePreview(file.name)}
                            class="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                          >
                            {loading() && loaderName() == file.name ? (
                              <div class="flex items-center">
                                <svg
                                  class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    class="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    stroke-width="4"
                                  />
                                  <path
                                    class="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  />
                                </svg>
                                Loading...
                              </div>
                            ) : (
                              "Preview File"
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </For>
              </div>
            </Show>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
