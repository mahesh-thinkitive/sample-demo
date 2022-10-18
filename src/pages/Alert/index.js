import Header from "../../components/Header";
import SidebarMenu from "../../components/Sidebar";
// import SideBar from "../../components/Sidebar/index1";

const Alert = () => {
  return (
    <div>
      <Header/>

      <div className="d-flex">
        <SidebarMenu/>

        <div className="w-100" style={{padding: 40}}>
          <h1>Inside Alert</h1>
        </div>
      </div>
    </div>
  );
};

export default Alert;
