import React, { useEffect, useState } from "react";
import "../../assets/styles/sidemenu.scss";

import Dropdown from 'react-bootstrap/Dropdown';
import GridIcon from "../../assets/images/grid_icon.svg";
import SearchIcon from "../../assets/images/search_black_icon.svg";
import MenuIcon from "../../assets/images/menu_black_icon.svg";

import App1 from "../../assets/images/app1.png";
import App2 from "../../assets/images/Image 25.png";
import App3 from "../../assets/images/Image 26.png";
import App4 from "../../assets/images/Image 27.png";
import App5 from "../../assets/images/Image 28.png";
import App6 from "../../assets/images/Image 29.png";
import SidebarMenu from "../../components/Sidebar";
import Header from "../../components/Header";

const APPS_LIST = [
  {
    iconPath: App1,
    name: '360 View',
    description: 'Lorem ipsum',
    quantity: 128,
    count: 45,
    date: 'Sep 22, 2022'
  },
  {
    iconPath: App2,
    name: 'AWS vpc',
    description: 'Lorem ipsum',
    quantity: 128,
    count: 45,
    date: 'Sep 22, 2022'
  },
  {
    iconPath: App3,
    name: 'AWS S3',
    description: 'Lorem ipsum',
    quantity: 128,
    count: 45,
    date: 'Sep 22, 2022'
  },
  {
    iconPath: App4,
    name: 'ITD',
    description: 'Lorem ipsum',
    quantity: 128,
    count: 45,
    date: 'Sep 22, 2022'
  },
  {
    iconPath: App5,
    name: 'Alert',
    description: 'Lorem ipsum',
    quantity: 128,
    count: 45,
    date: 'Sep 22, 2022'
  },
  {
    iconPath: App6,
    name: '360 View',
    description: 'Lorem ipsum',
    quantity: 128,
    count: 45,
    date: 'Sep 22, 2022'
  },
  {
    iconPath: App2,
    name: '360 View',
    description: 'Lorem ipsum',
    quantity: 128,
    count: 45,
    date: 'Sep 22, 2022'
  },
  {
    iconPath: App2,
    name: '360 View',
    description: 'Lorem ipsum',
    quantity: 128,
    count: 45,
    date: 'Sep 22, 2022'
  },
  {
    iconPath: App2,
    name: '360 View',
    description: 'Lorem ipsum',
    quantity: 128,
    count: 45,
    date: 'Sep 22, 2022'
  },
  {
    iconPath: App2,
    name: '360 View',
    description: 'Lorem ipsum',
    quantity: 128,
    count: 45,
    date: 'Sep 22, 2022'
  },
  {
    iconPath: App2,
    name: '360 View',
    description: 'Lorem ipsum',
    quantity: 128,
    count: 45,
    date: 'Sep 22, 2022'
  }
]

const Home = () => {
  return (
    <>
      <Header/>
      <div className="w-100 d-flex custom-height">
        <SidebarMenu/>

        <div id="home-container">
          <input className="search-input" placeholder="Search"/>

          <div className="result-block">
            <div>
              <span>Results (79)</span>

              <Dropdown className="dropdown-search d-inline mx-2">
                <Dropdown.Toggle id="dropdown-autoclose-true">
                  All
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Root Apps</Dropdown.Item>
                  <Dropdown.Item href="#">Alerts</Dropdown.Item>
                  <Dropdown.Item href="#">AWS</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="clubbed-filter-icons">
              <img src={SearchIcon}/>
              <img src={GridIcon}/>
              <img src={MenuIcon}/>
            </div>
          </div>

          <hr/>

          <div className="apps-container">
            {APPS_LIST.map((_item, _idx) => (
              <div className="app-list-block">
                <img src={_item.iconPath ?? App1}/>

                <div className="w-100 d-flex justify-content-between">
                  <span>{_item.name ?? 'N/A'}</span>
                  <span>{_item.description ?? 'N/A'}</span>
                  <span>{_item.description}</span>
                  <span>{_item.quantity}</span>
                  <span>{_item.count}</span>
                  <span>{_item.date}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
