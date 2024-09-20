import { useParams } from "@solidjs/router";
import Sidebar from "../../components/dashboard/Sidebar";

const Dashboard = () => {
  const params = useParams();
  console.log(params.year);
  return (
    <div class="p-4">
      {/* Hello */}
      <Sidebar year={params.year}/>
    </div>
  );
};

export default Dashboard;
