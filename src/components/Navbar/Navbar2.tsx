import { Component } from "solid-js";
import { RiSystemSettings2Fill } from "solid-icons/ri";
import type { JSX } from "solid-js";
import { logout } from "../../hooks/auth";
import logo from "../../assets/logo.svg";
interface NavLink {
  name: string;
  path: string;
}

interface NavBtn {
  name: string;
  classes: string;
  Icon?: () => JSX.Element;
  action?: () => void;
}

interface nav {
  navLinks: NavLink[];
  navBtns: NavBtn[];
}
const navContent: nav = {
  navLinks: [
    { name: "Home", path: "/" },
    // { name: "Kquiz", path: "/kquiz" },
    { name: "Society", path: "https://kaizentechsociety.xyz" },
  ],
  navBtns: [
    {
      name: "logout",
      classes: "bg-red-500",
      Icon: () => <></>,
      action: logout,
    },
    // {
    //   name: "",
    //   classes: "bg-gray-500 hover:bg-gray-600",
    //   Icon: () => <RiSystemSettings2Fill />,
    // },
  ],
};

const Navbar2: Component = () => {
  return (
    <div class="grid grid-cols-[3fr,2fr] text-white w-full backdrop-blur-lg bg-none gap-4 p-4 justify-between text-xl transition duration-500 ease-in-out fixed z-20 bg-[#21204F] ">
      <div class="flex items-center pl-20">
        <img src={logo} class="h-12 scale-[1.25]" alt="not here" />
      </div>
      <div class="flex justify-between gap-10">
        <div class="flex gap-8 text-center items-center justify-center">
          {navContent.navLinks.map((link) => (
            <a href={link.path} class="hover:underline">
              {link.name}
            </a>
          ))}
        </div>
        <div class="flex gap-8">
          {navContent.navBtns.map((btn) => (
            <button
              class={`hover:bg-[#853232] rounded-md px-4 py-2 transition duration-200 ease-in-out ${btn.classes}`}
              onClick={() => btn.action?.()}
            >
              {btn.name}
              {btn.Icon && typeof btn.Icon === "function" && btn.Icon()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
