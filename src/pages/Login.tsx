import { createSignal } from "solid-js";
import { Component } from "solid-js";

export const Login: Component = () => {
  const [name, setName] = createSignal<string>("");
  const [password, setPassword] = createSignal<string>("");

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    console.log({ name: name(), password: password() });
  };

  console.log(import.meta.env.VITE_MONGO_URI);

  return (
    <div class="flex h-screen items-center justify-center">
      <form onSubmit={handleSubmit} class="flex flex-col bg-red-500 p-4">
        <label>
          name:
          <input
            type="text"
            value={name()}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password()}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
