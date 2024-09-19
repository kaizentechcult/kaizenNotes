import { A } from "@solidjs/router";

const Navbar = () => {
  return (
    <nav class="flex justify-center ">
      <ul class="flex text-white bg-black rounded-full gap-4 p-2 mt-3">
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
      </ul>
    </nav>
  );
};

export default Navbar;
