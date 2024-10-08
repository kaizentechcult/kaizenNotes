import { useParams } from "@solidjs/router";
import Sidebar from "../../components/dashboard/Sidebar";
import Sidebar2 from "../../components/dashboard/Sidebar2";
import { createSignal } from "solid-js";
import { isLoading } from "../../hooks/common";
import Loader from "../../components/Loader/Loader";

const Dashboard = () => {
  const [link, setLink] = createSignal("");
  const params = useParams();
  console.log(params.year);
  window.addEventListener("link-clicked", (event: any) => {
    console.log(event);
    setLink(event.detail);
  });

  return (
    <div class="md:p-4 flex h-screen overflow-hidden justify-center items-center">
      {params.year === "year1"?
      <Sidebar year={params.year} />
      :<Sidebar2 year={params.year} /> }
      {isLoading() ? (
        <Loader />
      ) : (
        <>
          <main class="bg-black w-screen md:rounded-lg h-full">
            <iframe src={link()} class="w-full h-full"></iframe>
          </main>
        </>
      )}
    </div>
  );
};

export default Dashboard;
