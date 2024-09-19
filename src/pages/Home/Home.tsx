import { createSignal, Component, useContext } from "solid-js";
import Navbar from "../../components/Navbar/Navbar";
import { A } from "@solidjs/router";
import Card from "../../components/Home/Card";

const yearLinks = {
  1: "/year1",
  2: "/year2",
  3: "/year3",
  4: "/year4",
};

const Home: Component = () => {
  const [isDark, setIsDark] = createSignal(false);

  const handleTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  };

  handleTheme();

  return (
    <div
      class={`${isDark() ? "bg-black text-white" : "bg-[#E7F0FF]"} h-screen`}
    >
      <Navbar />
      <div class="flex justify-center items-center h-screen gap-8">
        {Object.entries(yearLinks).map(([year, link]) => (
          <Card  year={year} link={link} />
        ))}
      </div>
    </div>
  );
};

export default Home;
