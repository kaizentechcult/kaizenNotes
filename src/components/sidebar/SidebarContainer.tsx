import "./Sidebar.css";
import arrow from "../../assets/arrow.svg";
import FolderIcon from "../../assets/FolderIcon.svg";
import { setIsMenuOpen, isMenuOpen } from "../../hooks/common";
import { JSX, ParentComponent } from "solid-js";

interface Props {
  year: string;
  children: JSX.Element[];
}

const SidebarContainer: ParentComponent<Props> = (props: Props) => {
  return (
    <>
      <button
        class={`fixed top-20 left-4 bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-[#853232] dark:hover:bg-[#9a3a3a] backdrop-blur-lg z-[60] rounded-full shadow-lg transform transition-all duration-300 ease-in-out ${
          isMenuOpen() ? "left-[17rem]" : "left-4"
        }`}
        onclick={() => setIsMenuOpen(!isMenuOpen())}
        aria-label="Toggle sidebar"
      >
        <img
          src={arrow}
          alt=""
          class={`p-2 w-8 h-8 transition-transform duration-300 ${
            isMenuOpen() ? "rotate-180" : ""
          }`}
        />
      </button>

      <div class="fixed top-0 left-0 h-full z-50">
        <div
          class={`bg-white dark:bg-[#2d2c5e] min-h-screen border-r border-gray-200 dark:border-gray-700/30 shadow-lg dark:shadow-2xl pt-16 fixed text-gray-900 dark:text-white transition-all duration-300 ease-in-out transform ${
            isMenuOpen()
              ? "translate-x-0 w-72"
              : "-translate-x-full w-72"
          }`}
        >
          <div class="p-4">
            <div class="flex items-center space-x-3 px-2 py-2.5 mb-4 bg-[#EEF2FF] dark:bg-[#21204F] rounded-lg">
              <img src={FolderIcon} alt="" class="w-5 h-5" />
              <h2 class="text-base font-semibold">
                {props.year.charAt(0).toUpperCase() + props.year.slice(1)}
              </h2>
            </div>

            <div class="space-y-1 overflow-y-auto max-h-[calc(100vh-8rem)]">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarContainer;