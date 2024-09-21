import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = createSignal(false);
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const toggleTheme = () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
    window.location.reload();
  };

  const handleMenu = () => {
    setIsOpen(!isOpen());
  };

  const navLinks = ["Home", "Quiz", "Profile", "About Us"];
  const navBtns = ["Theme", "Logout"];
  return (
    <>
      <ul class=" text-white w-full bg-[#000000c2] backdrop-blur-lg bg-none gap-4 p-4 justify-center text-xl transition duration-500 ease-in-out fixed z-[999]">
        <div onclick={handleMenu}>
          <img src="src/assets/MenuIcon.svg" alt="" />
        </div>
        <li class={`${isOpen() ? "" : "hidden"} `}>
          <ul class="mt-4">
            {navLinks.map((item) => (
              <li class="mb-4">
                <A href={`/${item.toLowerCase()}`}>{item}</A>
              </li>
            ))}
          </ul>
          {navBtns.map((item) => (
            <li class="mb-4">
              <button onClick={item === "Theme" ? toggleTheme : logout}>
                {item}
              </button>
            </li>
          ))}
        </li>
      </ul>
    </>
  );
};

export default Navbar;
