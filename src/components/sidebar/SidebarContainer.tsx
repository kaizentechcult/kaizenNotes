import "./Sidebar.css";
import arrow from "../../assets/arrow.svg";
import FolderIcon from "../../assets/FolderIcon.svg";

import { setIsMenuOpen, isMenuOpen } from "../../hooks/common";
import { JSX } from "solid-js";
import { ParentComponent } from "solid-js";

interface Props {
  year: string;
  children: JSX.Element[];
}

const SidebarContainer: ParentComponent<Props> = (props: Props) => {
  return (
    <>
      <button
        class={`fixed top-20 left-4 bg-[#853232] backdrop-blur-lg ] z-50 rounded-full`}
        onclick={() => setIsMenuOpen(!isMenuOpen())}
      >
        <img
          src={arrow}
          alt=""
          class={`p-2  ${isMenuOpen() && "rotate-180"}`}
        />
      </button>
      <div class=" fixed top-0 left-0 ">
        <div
          class={`bg-[#21204F] h-screen md:flex pt-20 fixed md:relative  text-white p-4 overflow-y-scroll overflow-x-hidden sidebar ${
            isMenuOpen()
              ? " w-full md:w-fit overflow-y-scroll "
              : "translate-x-[-100%] overflow-x-hidden"
          }`}
        >
          <ul class="mt-10">
            <li class={`my-1.5 ${isMenuOpen() ? " block" : "hidden"}`}>
              <span class="flex items-center gap-1.5">
                <img src={FolderIcon} alt="" class="w-6 h-6" />
                <p class="">
                  {props.year.charAt(0).toUpperCase() + props.year.slice(1)}
                </p>
              </span>
              <ul class="pl-3">{props.children}</ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarContainer;
