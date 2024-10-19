import { useRouter } from "next/router";
import Sidebar from "../../components/dashboard/Sidebar";
import Sidebar2 from "../../components/dashboard/Sidebar2";
import { useState } from "react";
import { isLoading } from "../../hooks/common";
import Loader from "../../components/Loader/Loader";
import MySVG2 from "../../components/dashboard/book.svg";
import Navbar from "../../components/Navbar/Navbar";

const Dashboard = () => {
  const router = useRouter();
  const [link, setLink] = useState("");
  const params = router.query;
  console.log(params.year);
  window.addEventListener("link-clicked", (event: any) => {
    console.log(event);
    setLink(event.detail);
  });

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
              {/* <div className="flex h-full w-full justify-center items-center text-black">
                <img src={MySVG} className="" />
                Unable to find what you are looking for?
                <div className="cursor-pointer text-blue-300">click here</div>
              </div> */}
              <div className="flex flex-col h-full w-full justify-center items-center text-black">
                <img src={MySVG2} className="w-80" />
                Unable to find what you are looking for?
                <div className="cursor-pointer text-blue-300">click here</div>
              </div>
              <iframe src={link} className="w-full h-full"></iframe>
            </main>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
