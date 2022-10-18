import React, { useEffect, useState } from "react";
import "../../assets/styles/sidemenu.scss";

import Header from "../../components/Header";
import SidebarMenu from "../../components/Sidebar";
// import SideBar from "../../components/Sidebar/index1";

const Search = () => {

  // useEffect(() => {
  //   window.location.reload()
  // }, [])

  return (
    <div>
      <Header/>
      <div className="d-flex">
        <SidebarMenu/>

        <div className="w-100" style={{padding: 40}}>
          <h1>Inside Search</h1>
        </div>
      </div>
    </div>
  );
};

export default Search;
