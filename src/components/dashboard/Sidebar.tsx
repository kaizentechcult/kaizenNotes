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
    <div>
      <button
        class={`fixed top-4 left-4 bg-[#000000] backdrop-blur-lg ] z-10 rounded-full`}
        onclick={() => setIsMenuOpen(!isMenuOpen())}
      >
        <img
          src={arrow}
          alt=""
          class={`p-2  ${isMenuOpen() && "rotate-180"}`}
        />
      </button>
      <ul
        class={`bg-[#21204F] md:flex pt-10 md:pt-0 fixed h-screen md:h-[95vh] md:rounded-lg text-white p-4 overflow-y-scroll overflow-x-hidden sidebar duration-1000 transition-[width] ${
          isMenuOpen() ? "w-fit" : "hidden"
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
      </ul>
    </div>
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
