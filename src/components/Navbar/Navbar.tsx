import { Component, createSignal } from "solid-js";
import type { JSX } from "solid-js";
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
const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

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
      action: handleLogout,
    },
  ],
};

const [isMenuOpen, setIsMenuOpen] = createSignal(false);

const Navbar: Component = () => {
  return (
    <div class="grid grid-cols-1  text-white w-full backdrop-blur-lg bg-none gap-4 p-4 justify-between text-xl transition duration-500 ease-in-out fixed z-20 bg-[#21204F] lg:items-center">
      <div class="flex lg:justify-between justify-between items-center lg:pl-20">
        <img src={logo} class="h-12 scale-[1.25]" alt="not here" />
        <button
          class=" ml-4 bg-[#853232] hover:bg-[#853232] rounded-full p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen())}
        >
          {isMenuOpen() ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <div class="flex lg:justify-end gap-8 lg:flex-row flex-col">
        <div
          class={`flex lg:flex-row flex-col gap-8 lg:gap-12 items-center justify-center transition duration-500 ease-in-out ${
            isMenuOpen() ? "flex" : "hidden"
          }`}
        >
          {navContent.navLinks.map((link) => (
            <a href={link.path} class="hover:underline">
              {link.name}
            </a>
          ))}
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
        <div class="flex lg:flex-row flex-col gap-8 lg:gap-12"></div>
      </div>
    </div>
  );
};

export default Navbar;
