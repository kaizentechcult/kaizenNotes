import { useParams } from "@solidjs/router";
import Sidebar from "../../components/dashboard/Sidebar";
import Sidebar2 from "../../components/dashboard/Sidebar2";
import { createSignal } from "solid-js";
import { isLoading } from "../../hooks/common";
import Loader from "../../components/Loader/Loader";
import MySVG2 from "../../components/dashboard/book.svg";
import Navbar from "../../components/Navbar/Navbar";
import { AuthProvider } from "../../utils/AuthContext";
import Navbar2 from "../../components/Navbar/Navbar2";
const Dashboard = () => {
  const [link, setLink] = createSignal("");
  const params = useParams();
  console.log(params.year);
  window.addEventListener("link-clicked", (event: any) => {
    console.log(event);
    setLink(event.detail);
  });

  return (
    <AuthProvider>
      <div>
        {/* <Navbar /> */}
        <Navbar2 />
        <div class="md:p-4 flex h-screen overflow-hidden justify-center items-center">
          {params.year === "year1" ? (
            <Sidebar year={params.year} />
          ) : (
            <Sidebar2 year={params.year} />
          )}
          {isLoading() ? (
            <Loader />
          ) : (
            <>
              <main class="bg-white w-screen md:rounded-lg h-screen">
                {link() === "" ? (
                  <div class="flex flex-col h-full w-full justify-center items-center text-black">
                    <img src={MySVG2} class="w-80" />
                    Unable to find what you are looking for?
                    <div class="cursor-pointer text-blue-300">click here</div>
                  </div>
                ) : (
                  <iframe src={link()} class="w-full h-full"></iframe>
                )}
              </main>
            </>
          )}
        </div>
      </div>
    </AuthProvider>
  );
};

export default Dashboard;
