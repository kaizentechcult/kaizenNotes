import "./Navbar.css";
import { A } from "@solidjs/router";
import { logout } from "../../hooks/auth";
import { toggleTheme } from "../../hooks/common";
import { navBtns, navLinks } from "../../utils/navData";
import { isOpen, setIsOpen, isDark } from "../../hooks/common";

const Navbar = () => {
  const handleClick = (item: string) => {
    if (item === "Theme") toggleTheme();
    if (item === "Logout") logout();
  };

  return (
    <ul
      class={`${
        isDark() ? "bg-black" : "bg-[#21204F]"
      } text-white w-full backdrop-blur-lg bg-none gap-4 p-4 justify-center text-xl transition duration-500 ease-in-out fixed z-20`}
    >
      <div class="md:hidden" onClick={() => setIsOpen(!isOpen())}>
        <img src="src/assets/MenuIcon.svg" alt="" />
      </div>
      <li
        class={`${
          isOpen() ? "" : "hidden "
        } md:flex md:flex-row gap-4 md:justify-center`}
      >
        {navLinks.map((item) => (
          <li>
            {item === "About Us" ? (
              <a
                href="https://kaizentechsociety.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item}
              </a>
            ) : (
              <A href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                {item}
              </A>
            )}
          </li>
        ))}
        {navBtns.map((item) => (
        <li>
            <button onClick={() => handleClick(item)}>{item}</button>
          </li>
        ))}
      </li>
    </ul>
  );
};

export default Navbar;
