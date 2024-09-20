import ChevronRight from "../../assets/ChevronRight.svg";
import FolderIcon from "../../assets/FolderIcon.svg";
import FileIcon from "../../assets/FileIcon.svg";
import folders from "../../utils/data";
import { createSignal } from "solid-js";
interface Props {
  year: string;
}

const Sidebar = (props: Props) => {
  return (
    <ul class="bg-[#21204F] w-1/6 h-fit rounded-lg text-white p-4">
      <ul>
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
    </ul>
  );
};

type Folder = {
  name: string;
  folders?: Folder[];
};

function Folder({ folder }: { folder: Folder }) {
  const [isOpen, setIsOpen] = createSignal(false);
  return (
    <li class="my-1.5">
      <span class="flex items-center gap-1.5">
        {folder.folders ? (
          <>
          <button onclick={()=>setIsOpen(!isOpen())}>
            <img src={ChevronRight} alt="" class={`w-3 h-3 ${isOpen()?'rotate-90':``} duration-100`} />
          </button>
            <img src={FolderIcon} alt="" class="w-6 h-6" />
          </>
        ) : (
          <img src={FileIcon} alt="" class="w-6 h-6" />
        )}
        <p class="">{folder.name}</p>
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
