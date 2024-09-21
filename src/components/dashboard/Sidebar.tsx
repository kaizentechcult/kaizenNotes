import ChevronRight from "../../assets/ChevronRight.svg";
import FolderIcon from "../../assets/FolderIcon.svg";
import FileIcon from "../../assets/FileIcon.svg";
import arrow from "../../assets/arrow.svg";
import folders from "../../utils/data";
import "./Sidebar.css";

import { createSignal } from "solid-js";
interface Props {
  year: string;
}

const Sidebar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);
  return (
    <ul
      class={`bg-[#21204F] h-[95vh] rounded-lg text-white p-4 overflow-y-scroll overflow-x-hidden sidebar duration-1000 transition-[width] ${
        isMenuOpen() ? "w-fit" : "w-0 transition-width duration-500"
      }`}
    >
      <li class="my-1.5">
        <span class="flex items-center gap-1.5">
          <img src={FolderIcon} alt="" class="w-6 h-6" />
          <p class="">
            {props.year.charAt(0).toUpperCase() + props.year.slice(1)}
          </p>
        </span>
        <ul class="pl-3">
          {folders.map((folder) => (
            <Folder folder={folder} />
          ))}
        </ul>
      </li>
      <button
        class="fixed top-4 left-4 "
        onclick={() => setIsMenuOpen(!isMenuOpen())}
      >
        <img src={arrow} alt="" class="rotate-45" />
      </button>
    </ul>
    // </ul>
  );
};

type Folder = {
  name: string;
  link?: string;
  folders?: Folder[];
};

function Folder({ folder }: { folder: Folder }) {
  const [isOpen, setIsOpen] = createSignal(false);
  return (
    <li class="my-1.5">
      <span class="flex items-center gap-1.5">
        {folder.folders ? (
          <>
            <button
              class="flex items-center gap-1.5"
              onclick={() => setIsOpen(!isOpen())}
            >
              <img
                src={ChevronRight}
                alt=""
                class={`w-3 h-3 ${isOpen() ? "rotate-90" : ``} duration-100`}
              />
              <img src={FolderIcon} alt="" class="w-6 h-6" />
              <p class="">{folder.name.slice(0, 16)}</p>
            </button>
          </>
        ) : (
          <div
            class="flex items-center gap-1.5 hover:cursor-pointer"
            onclick={() => {
              const event = new CustomEvent("link-clicked", {
                detail: folder.link,
              });
              window.dispatchEvent(event);
            }}
          >
            <img src={FileIcon} alt="" class="w-6 h-6" />
            <p class="">{folder.name.slice(0, 16)}</p>
          </div>
        )}
      </span>
      {isOpen() && (
        <ul class="pl-6">
          {folder.folders?.map((folder) => (
            <Folder folder={folder} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default Sidebar;
