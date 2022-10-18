import React, { useEffect, useState } from "react";
import "../../assets/styles/sidemenu.scss";

import { NavLink } from "react-router-dom";

import SearchIcon from "../../assets/images/search.svg";
import SandwichIcon from "../../assets/images/sandwich.svg";
import BellIcon from "../../assets/images/bell.svg";
import DashboardIcon from "../../assets/images/dashboard.svg";
import ExploreIcon from "../../assets/images/explore.svg";
import IntegrationIcon from "../../assets/images/integration.svg";
import SignOutIcon from "../../assets/images/signout_icon.svg";
import { useLocation } from "react-router-dom";


import SubSideMenu from "../SubSidemenu"; 

// common sidebar menu for specific pages
const SidebarMenu = () => {
  const { pathname } = useLocation();
  const [toggleSubMenu, setToggleSubMenu] = useState(false)

  useEffect(() => {
    if(pathname == '/sub-nav'){
      setToggleSubMenu(true)
    }
  }, [])

  return (
    <div id="sidemenu-container">
      <div className="menu-item-block">
        <div className="nav-section">
          <a
            onClick={() => setToggleSubMenu(!toggleSubMenu)}
          >
            <img src={SandwichIcon} style={{marginLeft: 5}}/>
            <p className="menu-text"></p>
          </a>

          {/* redirect to page after click and will be selected for selected page */}
          <NavLink
            to="/search"
            className={(isActive) => "flex cursor-pointer " + (isActive ? "selected-menu-item" : " menu-item")}
          >
            <img src={SearchIcon}/>
            <p className="menu-text">Search</p>
          </NavLink>

          <NavLink
            to="/alert"
            className={(isActive) =>
              "flex cursor-pointer " +
              (isActive ? "selected-menu-item" : " menu-item")
            }
          >
            <img src={BellIcon}/>
            <p className="menu-text">Alert</p>
          </NavLink>

          <NavLink
            to="/dashboard"
            className={(isActive) =>
              "flex cursor-pointer " +
              (isActive ? "selected-menu-item" : " menu-item")
            }
          >
            <img src={DashboardIcon}/>
            <p className="menu-text">Dashboard</p>
          </NavLink>

          <NavLink
            to="/explore"
            className={(isActive) =>
              "flex cursor-pointer " +
              (isActive ? "selected-menu-item" : " menu-item")
            }
          >
            <img src={ExploreIcon}/>
            <p className="menu-text">Explore</p>
          </NavLink>

          <NavLink
            to="/integration"
            className={(isActive) =>
              "flex cursor-pointer " +
              (isActive ? "selected-menu-item" : " menu-item")
            }
          >
            <img src={IntegrationIcon}/>
            <p className="menu-text">Integration</p>
          </NavLink>

          <NavLink
            to="/custom-dashboard"
            className={(isActive) =>
              "flex cursor-pointer " +
              (isActive ? "selected-menu-item" : " menu-item")
            }
          >
            <img src={DashboardIcon}/>
            <p className="menu-text">Custom Dashboard</p>
          </NavLink>
        </div>

        <div className="nav-section " style={{marginTop: 'calc(100% - 135px)'}}>
          <NavLink
            to="/new-dashboard"
            className={(isActive) =>
              "flex cursor-pointer " +
              (isActive ? "selected-menu-item" : " menu-item")
            }
          >
            <img src={BellIcon}/>
            <p className="menu-text">New Dashboard</p>
          </NavLink>

          <NavLink
            to="/sign-out"
            className={(isActive) =>
              "flex cursor-pointer " +
              (isActive ? "selected-menu-item" : " menu-item")
            }
          >
            <img src={SignOutIcon}/>
            <p className="menu-text">Sign Out</p>
          </NavLink>
        </div>
      </div>

      {toggleSubMenu && <div>
        <SubSideMenu/>
      </div>}
    </div>
  );
};

export default SidebarMenu;
