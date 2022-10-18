import Header from "../../components/Header";
import SidebarMenu from "../../components/Sidebar";
// import SideBar from "../../components/Sidebar/index1";

const Integration = () => {
  return (
    <div>
      <Header/>

      <div className="d-flex">
        <SidebarMenu/>

        <div className="w-100" style={{padding: 40}}>
          <h1>Inside Integration</h1>
        </div>
      </div>
    </div>
  );
};

export default Integration;