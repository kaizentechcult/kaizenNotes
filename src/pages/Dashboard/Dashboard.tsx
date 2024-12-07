import { createSignal, onMount } from "solid-js";
import { useParams } from "@solidjs/router";
import { AuthProvider } from "../../utils/AuthContext";
import { isLoading } from "../../hooks/common";
import Loader from "../../components/Loader/Loader";
import Modal from "../../components/Modal/Modal";
import MySVG2 from "../../components/dashboard/book.svg";
import Navbar from "../../components/Navbar/Navbar";
import RequestDialog from "../../components/RequsetDialog/RequestDialog";
import Sidebar from "../../components/dashboard/Sidebar";
import Sidebar2 from "../../components/dashboard/Sidebar2";
import { Toaster } from "solid-toast";
import "../../styles/transitions.css";

const Dashboard = () => {
  const [link, setLink] = createSignal("");
  const [iframeLoading, setIframeLoading] = createSignal(true);
  const [isPageVisible, setIsPageVisible] = createSignal(false);
  const params = useParams();

  onMount(() => {
    window.addEventListener("link-clicked", (event: any) => {
      setLink(event.detail);
      setIframeLoading(true);
    });

    requestAnimationFrame(() => {
      setIsPageVisible(true);
    });
  });

  const mainContent = () => {
    if (isLoading()) {
      return (
        <div class="flex justify-center items-center h-full">
          <Loader />
        </div>
      );
    }

    if (link() === "") {
      return (
        <div class="flex flex-col h-full w-full justify-center items-center text-gray-600 dark:text-gray-300 space-y-6">
          <img src={MySVG2} class="w-80 animate-float" />
          <p class="text-xl">Unable to find what you are looking for?</p>
          <div class="cursor-pointer">
            <Modal text="click here">
              <RequestDialog />
            </Modal>
          </div>
        </div>
      );
    }

    return (
      <div class="relative w-full h-full">
        {iframeLoading() && (
          <div class="absolute inset-0 flex justify-center items-center bg-[#EEF2FF] dark:bg-primary">
            <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2563eb] dark:border-white"></div>
          </div>
        )}
        <iframe 
          src={link()} 
          class="w-full h-screen"
          onLoad={() => setIframeLoading(false)}
          style="height: calc(100vh - 4rem);"
        />
      </div>
    );
  };

  return (
    <AuthProvider>
      <div 
        class={`page-wrapper bg-lightBG dark:bg-primary ${
          isPageVisible() ? 'page-enter-active' : 'page-enter'
        }`}
      >
        <Toaster position="bottom-right" />
        <Navbar />
        <div class="flex h-screen">
          <div class="flex-none">
            {params.year === "year1" ? (
              <Sidebar year={params.year} />
            ) : (
              <Sidebar2 year={params.year} />
            )}
          </div>
          <main class="flex-1 bg-white dark:bg-secondary transition-all duration-300 ease-in-out pt-16">
            {mainContent()}
          </main>
        </div>
      </div>
    </AuthProvider>
  );
};

export default Dashboard;