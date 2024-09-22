import { useParams } from "@solidjs/router";
import Sidebar from "../../components/dashboard/Sidebar";
import { createSignal } from "solid-js";

const Dashboard = () => {
  const [link, setLink] = createSignal("");
  const params = useParams();
  console.log(params.year);
  window.addEventListener("link-clicked", (event: any) => {
    console.log(event);
    setLink(event.detail);
  });

  return (
    <div class="md:p-4 flex h-screen">
      <Sidebar year={params.year} />
      <main class="bg-black w-full md:rounded-lg">
        <iframe src={link()} class="w-full h-full"></iframe>
      </main>
    </div>
  );
};

export default Dashboard;
