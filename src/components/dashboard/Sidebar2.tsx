// import "./Sidebar.css";
import folders from "../../utils/data2";
import Folder from "../sidebar/Folder";
import SidebarContainer from "../sidebar/SidebarContainer";

interface Props {
  year: string;
}

const Sidebar2 = (props: Props) => {
  return (
    <SidebarContainer year={props.year}>
      {folders.map((folder) => (
        <Folder folder={folder} />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar2;
