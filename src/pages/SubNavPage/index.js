import Header from "../../components/Header";
import SidebarMenu from "../../components/Sidebar";
import BasicTabs from "../../components/Tabs";
// import SideBar from "../../components/Sidebar/index1";

const SubNewPage = () => {
  return (
    <div>
      <Header/>

      <div className="d-flex">
        <SidebarMenu/>

        <div className="w-100" style={{padding: 40}}>
          <h1>Inside sub navigations</h1>
          <BasicTabs/>
        </div>
      </div>
    </div>
  );
};

export default SubNewPage;