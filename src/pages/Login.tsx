import { createSignal } from "solid-js";
import { Component } from "solid-js";
import axios from "axios";
export const Login: Component = () => {
  const [email, setEmail] = createSignal<string>("");
  const [password, setPassword] = createSignal<string>("");

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    console.log({ name: email(), password: password() });

    // Login
    let data = JSON.stringify({
      password: "iloveboobs",
      email: "krish@gmail.com",
    });

    let config = {
      method: "post",
      mode: "no-cors",
      maxBodyLength: Infinity,
      url: "http://localhost:8080/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(import.meta.env.VITE_MONGO_URI);

  return (
    <div class="flex h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        class="w-full max-w-sm bg-white rounded-lg shadow-md p-6"
      >
        <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={email()}
            onChange={(e) => setEmail(e.currentTarget.value)}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password()}
            onChange={(e) => setPassword(e.currentTarget.value)}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
