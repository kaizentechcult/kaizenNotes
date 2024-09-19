import { Component } from "solid-js";
import { A } from "@solidjs/router";
import Navbar from "../../components/Navbar/Navbar";

const Home: Component = () => {
  return (
    <div class="bg-black h-screen text-white justify-center items-center w-full">
      <ul class="flex gap-4">
        <A href="/login"> login</A>
        <A href="/register"> Register</A>
      </ul>
      <Navbar />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
