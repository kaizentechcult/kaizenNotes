import { useParams } from "@solidjs/router";
import Sidebar from "../../components/dashboard/Sidebar";
import { createSignal } from "solid-js";

const Dashboard = () => {
  const [link, setLink] = createSignal("");
  const params = useParams();
  console.log(params.year);
  // onclick={() => {
  //   const event = new CustomEvent("link-clicked", {
  //     detail: folder.link,
  //   });
  //   // dispatch a custom event to the window when a link is clicked
  //   // this allows the parent component to listen for the event and
  //   // take action (e.g. open the link in a new tab)
  //   window.dispatchEvent(event);
  // }}
  // listen for the custom event dispatched by the child component
  window.addEventListener("link-clicked", (event: any) => {
    console.log(event);
    setLink(event.detail);
  });

  return (
    <div class="p-4 flex">
      <Sidebar year={params.year} />
      <main class="bg-black w-full rounded-lg">
        <iframe src={link()} class="w-full h-full"></iframe>
      </main>
    </div>
  );
};

export default Dashboard;
