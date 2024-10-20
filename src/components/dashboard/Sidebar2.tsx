import Image from "next/image";
import "./Sidebar.module.css";
import folders from "../../../utils/data2";

import { useState } from "react";
import { useRouter } from "next/router";

interface Props {
  year: string;
}

const Sidebar2 = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const router = useRouter();

  const handleLinkClick = (link: string) => {
    router.push(link);
    setIsMenuOpen(false);
  };

  return (
    <>
      <button
        className={`fixed top-4 left-4 bg-[#000000] backdrop-blur-lg ] z-10 rounded-full`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Image
          src="/arrow.svg"
          alt=""
          className={`p-2  ${isMenuOpen ? "rotate-180" : ""}`}
          width={20}
          height={20}
        />
      </button>
      <div className="fixed top-0 left-0">
        <ul
          className={`bg-[#21204F] h-screen md:h-[96vh] md:flex pt-10 fixed md:relative  text-white p-4 overflow-y-scroll overflow-x-hidden sidebar  ${
            isMenuOpen
              ? " w-full md:w-fit h-[96vh] overflow-y-scroll  md:rounded-xl"
              : "w-0 overflow-hidden md:rounded-3xl"
          }`}
        >
          <li className={`my-1.5 ${isMenuOpen ? " block" : "hidden"}`}>
            <span className="flex items-center gap-1.5">
              <Image
                src="/FolderIcon.svg"
                alt=""
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <p className="">
                {props.year.charAt(0).toUpperCase() + props.year.slice(1)}
              </p>
            </span>
            <ul className="pl-3">
              {folders.map((folder, index) => (
                <Folder
                  key={index}
                  folder={folder}
                  onLinkClick={handleLinkClick}
                />
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

type Folder = {
  name: string;
  link?: string;
  folders?: Folder[];
};

function Folder({
  folder,
  onLinkClick,
}: {
  folder: Folder;
  onLinkClick: (link: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="my-1.5">
      <span className="flex items-center gap-1.5">
        {folder.folders ? (
          <>
            <button
              className="flex items-center gap-1.5"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Image
                src="/ChevronRight.svg"
                alt=""
                className={`w-3 h-3 ${isOpen ? "rotate-90" : ``} duration-100`}
                width={16}
                height={16}
              />
              <Image
                src="/FolderIcon.svg"
                alt=""
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <p className="">{folder.name.slice(0, 16)}</p>
            </button>
          </>
        ) : (
          <div
            className="flex items-center gap-1.5 hover:cursor-pointer"
            onClick={() => onLinkClick(folder.link!)}
          >
            <Image
              src="/FileIcon.svg"
              alt=""
              className="w-6 h-6"
              width={24}
              height={24}
            />
            <p className="">{folder.name.slice(0, 16)}</p>
          </div>
        )}
      </span>
      {isOpen && (
        <ul className="pl-6">
          {folder.folders?.map((folder, index) => (
            <Folder key={index} folder={folder} onLinkClick={onLinkClick} />
          ))}
        </ul>
      )}
    </li>
  );
}
export default Sidebar2;
