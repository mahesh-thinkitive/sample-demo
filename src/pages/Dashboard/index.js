import React, { useEffect, useState } from "react";
import "../../assets/styles/sidemenu.scss";

import Header from "../../components/Header";
import SidebarMenu from "../../components/Sidebar";
// import SideBar from "../../components/Sidebar/index1";

const Dashboard = () => {
  return (
    <div>
      <Header/>

      <div className="d-flex">
        <SidebarMenu/>

        <div className="w-100" style={{padding: 40}}>
          <h1>Inside Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
