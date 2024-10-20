import Card from "../../components/Home/Card";
import Navbar from "../../components/Navbar/Navbar";
import { AuthProvider } from "../../../utils/AuthContext";

const yearLinks = {
  1: "year1",
  2: "year2",
};

const Home = () => {
  return (
    <AuthProvider>
      <div className={` md:h-screen`}>
        <Navbar />
        <div className="flex h-screen justify-center items-center gap-8 flex-wrap py-20">
          {Object.entries(yearLinks).map(([year, link]) => (
            <Card key={year} year={year} link={link} />
          ))}
        </div>
      </div>
    </AuthProvider>
  );
};

export default Home;
