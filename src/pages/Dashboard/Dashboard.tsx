import { useParams } from "@solidjs/router";
import { createSignal } from "solid-js";
import { isLoading } from "../../hooks/common";
import { AuthProvider } from "../../utils/AuthContext";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import Sidebar2 from "../../components/dashboard/Sidebar2";
import Loader from "../../components/Loader/Loader";
import MySVG2 from "../../components/dashboard/book.svg";
import Modal from "../../components/Modal/Modal";
import RequestDialog from "../../components/RequsetDialog/RequestDialog";
import { Toaster } from "solid-toast";

const Dashboard = () => {
  const [link, setLink] = createSignal("");
  const params = useParams();

  window.addEventListener("link-clicked", (event: any) => {
    setLink(event.detail);
  });

  const mainContent = () => {
    if (isLoading()) {
      return <Loader />;
    }

    if (link() === "") {
      return (
        <div class="flex flex-col h-full w-full justify-center items-center text-black">
          <img src={MySVG2} class="w-80" />
          Unable to find what you are looking for?
          <div class="cursor-pointer text-blue-300">
            <Modal text="click here">
              <RequestDialog />
            </Modal>
          </div>
        </div>
      );
    }

    return <iframe src={link()} class="w-full h-full" />;
  };

  return (
    <AuthProvider>
      <div>
        <Toaster position="bottom-right" />
        <Navbar />
        <div class="md:p-4 flex h-screen overflow-hidden justify-center items-center">
          {params.year === "year1" ? (
            <Sidebar year={params.year} />
          ) : (
            <Sidebar2 year={params.year} />
          )}
          <main class="bg-white w-screen md:rounded-lg h-screen pt-16">
            {mainContent()}
          </main>
        </div>
      </div>
    </AuthProvider>
  );
};

export default Dashboard;
