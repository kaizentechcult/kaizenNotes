import { useState } from "react";
import useCommon from "@/hooks/common";
import { useRouter } from "next/router";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import Sidebar2 from "../../components/dashboard/Sidebar2";

const Dashboard = () => {
  const router = useRouter();
  const [link, setLink] = useState("");
  const params = router.query;

  setLink(params.year === "year1" ? "/year1" : "/year2");

  const { isLoading } = useCommon();

  return (
    <div>
      <Navbar />
      <div className="md:p-4 flex h-screen overflow-hidden justify-center items-center">
        {params.year === "year1" ? (
          <Sidebar year={params.year} />
        ) : (
          <Sidebar2 year={typeof params.year === "string" ? params.year : ""} />
        )}
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <main className="bg-white w-screen md:rounded-lg h-screen">
              <iframe src={link} className="w-full h-full"></iframe>
            </main>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

