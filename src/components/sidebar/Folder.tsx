import ChevronRight from "../../assets/ChevronRight.svg";
import FileIcon from "../../assets/FileIcon.svg";
import { createSignal } from "solid-js";
import FolderIcon from "../../assets/FolderIcon.svg";
import { setIsLoading } from "../../hooks/common";

type Folder = {
  name: string;
  link?: string;
  folders?: Folder[];
};

function Folder({ folder }: { folder: Folder }) {
  const [isOpen, setIsOpen] = createSignal(false);
  const [isHovered, setIsHovered] = createSignal(false);

  return (
    <div class="my-1">
      <div
        class={`rounded-lg transition-colors duration-200 ${
          isHovered() ? 'bg-[#EEF2FF] dark:bg-[#21204F]' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {folder.folders ? (
          <button
            class="w-full px-3 py-2 flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen())}
          >
            <div class="flex items-center gap-3 min-w-0">
              <div class="flex items-center gap-2">
                <img
                  src={ChevronRight}
                  alt=""
                  class={`w-4 h-4 transition-transform duration-300 ${
                    isOpen() ? "rotate-90" : ""
                  }`}
                />
                <img 
                  src={FolderIcon} 
                  alt="" 
                  class={`w-5 h-5 transition-transform duration-200 ${
                    isOpen() ? "scale-110" : ""
                  }`} 
                />
              </div>
              <span class="truncate text-sm">{folder.name}</span>
            </div>
          </button>
        ) : (
          <div
            class="w-full px-3 py-2 flex items-center gap-3 cursor-pointer text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            onClick={() => {
              const event = new CustomEvent("link-clicked", {
                detail: folder.link,
              });
              window.dispatchEvent(event);
              setIsLoading(true);
              setTimeout(() => setIsLoading(false), 1500);
            }}
          >
            <div class="flex items-center gap-3 min-w-0">
              <img src={FileIcon} alt="" class="w-5 h-5 ml-6" />
              <span class="truncate text-sm">{folder.name}</span>
            </div>
          </div>
        )}
      </div>

      <div
        class={`overflow-hidden transition-all duration-300 ${
          isOpen() ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul class="pl-4 mt-1">
          {folder.folders?.map((subfolder) => (
            <Folder folder={subfolder} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Folder;