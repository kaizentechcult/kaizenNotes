import { Toaster } from "react-hot-toast";
import { createSignal } from "solid-js";
import { Component } from "solid-js";

export const Login: Component = () => {
  const [email, setEmail] = createSignal<string>("");
  const [password, setPassword] = createSignal<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = { email: email(), password: password() };

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }
      const result = await response.json();
      console.log("Data sent successfully:", result);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div class="flex h-screen items-center justify-center bg-black ">
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
      {/* {Loading()} */}

      <form
        onSubmit={handleSubmit}
        class="w-full max-w-sm bg-[#414141] rounded-lg shadow-md p-6"
      >
        <h2 class="text-2xl font-bold mb-6 text-center text-white">Login</h2>
        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={email()}
            onChange={(e) => setEmail(e.currentTarget.value)}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
          />
        </div>
        <div class="mb-6">
          <label class="block text-white text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password()}
            onChange={(e) => setPassword(e.currentTarget.value)}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
