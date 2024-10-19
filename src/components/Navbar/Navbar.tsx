import Link from "next/link";
import { useState } from "react";
import { logout } from "../../hooks/auth";
import { toggleTheme } from "../../hooks/common";
import { navBtns, navLinks } from "../../../utils/navData";

const Navbar = () => {
  const [isOpenState, setIsOpenState] = useState(false);

  return (
    <nav className="bg-black text-white w-full backdrop-blur-lg bg-none gap-4 p-4 justify-center text-xl transition duration-500 ease-in-out fixed z-20">
      <div className="md:hidden" onClick={() => setIsOpenState(!isOpenState)}>
        <img src="/MenuIcon.svg" alt="" />
      </div>
      <ul
        className={`${
          isOpenState ? "" : "hidden "
        } md:flex md:flex-row gap-4 md:justify-center`}
      >
        {navLinks.map((item) => (
          <li key={item}>
            <Link href={`/${item.toLowerCase()}`}>
              <a>{item}</a>
            </Link>
          </li>
        ))}
        {navBtns.map((item) => (
          <li key={item}>
            <button onClick={item === "Theme" ? toggleTheme : logout}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
