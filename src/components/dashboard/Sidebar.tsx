// import "./Sidebar.css";
import folders from "../../utils/data";

import Folder from "../sidebar/Folder";
import SidebarConatiner from "../sidebar/SidebarContainer";
interface Props {
  year: string;
}

const Sidebar = (props: Props) => {
  return (
    <SidebarConatiner year={props.year}>
      {folders.map((folder) => (
        <Folder folder={folder} />
      ))}
    </SidebarConatiner>
  );
};

export default Sidebar;
