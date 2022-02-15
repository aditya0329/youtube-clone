import PrimarySidebar from "./PrimarySidebar";
import SecondarySideBar from "./SecondarySidebar";

const Sidebar = (props) => {
  return props.toggledSideBar ? <PrimarySidebar /> : <SecondarySideBar />;
};

export default Sidebar;
