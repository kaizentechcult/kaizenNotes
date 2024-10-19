import { useState } from "react";
import Card from "../../components/Home/Card";
import Navbar from "../../components/Navbar/Navbar";
import { handleTheme } from "../../hooks/common";
import { AuthProvider } from "../../../utils/AuthContext";

const yearLinks = {
  1: "year1",
  2: "year2",
  // 3: "year3",
  // 4: "year4",
};
handleTheme();

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <AuthProvider>
      <div
        className={`${
          darkMode ? "bg-black text-white" : "bg-[#E7F0FF] text-black"
        } md:h-screen`}
      >
        <Navbar />
        <div className="flex h-screen justify-center items-center gap-8 flex-wrap py-20">
          {Object.entries(yearLinks).map(([year, link]) => (
            <Card year={year} link={link} />
          ))}
        </div>
      </div>
    </AuthProvider>
  );
};

export default Home;
