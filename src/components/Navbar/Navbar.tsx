import "./Navbar.css";
import { A } from "@solidjs/router";
import { logout } from "../../hooks/auth";
import { toggleTheme } from "../../hooks/theme";
import { navBtns, navLinks } from "../../utils/navData";
import { isOpen, setIsOpen } from "../../hooks/common";

const Navbar = () => {
  return (
    <ul class=" text-white w-full backdrop-blur-lg bg-none gap-4 p-4 justify-center text-xl transition duration-500 ease-in-out fixed z-[999]">
      <div class="md:hidden" onclick={() => setIsOpen(!isOpen())}>
        <img src="src/assets/MenuIcon.svg" alt="" />
      </div>
      <li
        class={`${
          isOpen() ? "" : "hidden "
        } md:flex md:flex-row gap-4 md:justify-center`}
      >
        {navLinks.map((item) => (
          <li>
            <A href={`/${item.toLowerCase()}`}>{item}</A>
          </li>
        ))}
        {navBtns.map((item) => (
          <li>
            <button onClick={item === "Theme" ? toggleTheme : logout}>
              {item}
            </button>
          </li>
        ))}
      </li>
    </ul>
  );
};

export default Navbar;
