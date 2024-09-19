import { createSignal, Component } from "solid-js";

const Home: Component = () => {
  const [isDark, setIsDark] = createSignal(false);

  const toggleTheme = () => {
    setIsDark(!isDark());
  };

  return (
    <div class={`${isDark() ? "bg-gray-800 text-white" : ""} h-screen`}>
      <button onClick={toggleTheme} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Switch Theme
      </button>
    </div>
  );
};

export default Home;


