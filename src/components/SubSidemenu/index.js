import React, { useEffect, useState } from "react";
import "../../assets/styles/sidemenu.scss";

import { NavLink } from "react-router-dom";

import SearchIcon from "../../assets/images/search.svg";
import SandwichIcon from "../../assets/images/sandwich.svg";
import APIKeyIcon from "../../assets/images/api_key_icon.svg";
import LogsIcon from "../../assets/images/logs_icon.svg";
import SettingsIcon from "../../assets/images/settings_icon.svg";
import SignoutIcon from "../../assets/images/signout_icon.svg";

const DASHBOARD_NAVS = ['AWS', 'Advanced Analytics', 'Behavior Analytics', 'Complience', 'Operational', 'SAAS App', 'Security Posture', 'Source Analytics']

const SubSideMenu = () => {
  return (
    <div id="subsidemenu-container">
      <div className="submenu-block">
        <div>
          Dashboards
        </div>

        {DASHBOARD_NAVS.map(_dashboard_nav => (<div className="dash-nav-list">
          <span>
            <NavLink to="/sub-nav">
              {_dashboard_nav}
            </NavLink>
          </span>
        </div>))}
      </div>
    </div>
  );
};

export default SubSideMenu;
