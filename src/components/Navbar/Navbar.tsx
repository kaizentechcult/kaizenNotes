import { A } from "@solidjs/router";
import { Component } from "solid-js/types/server";

const Navbar: Component = () => {
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
  return (
    // <nav class="flex justify-center bg-white items-center absolute w-full ">
    <ul class="flex text-white bg-black gap-4 p-4 justify-center">
      <li>
        <A href="/">Home</A>
      </li>
      <li>
        <A href="/quiz">Quiz</A>
      </li>
      <li>
        <A href="/profile">Profile</A>
      </li>
      <li>
        <A href="/about">About Us</A>
      </li>
      <li>
        <button onClick={toggleTheme}>Theme</button>
      </li>
      <li>
        <button onClick={logout}>Logout</button>
      </li>
    </ul>
    // </nav>
  );
};

export default Navbar;
