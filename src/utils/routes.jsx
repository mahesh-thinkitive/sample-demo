import Alert from "../pages/Alert";
import Navbar from "../pages/Alert";
import Dashboard from "../pages/Dashboard";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import Integration from "../pages/Integration";
import Search from "../pages/Search";
import SubNewPage from "../pages/SubNavPage";

export const appRoutes = [
  {
    path: "/",
    exact: true,
    main: () => <Home/>,
  },
  {
    path: "/search",
    exact: true,
    main: () => <Search/>,
  },
  {
    path: "/alert",
    exact: true,
    main: () => <Alert/>,
  },
  {
    path: "/dashboard",
    exact: true,
    main: () => <Dashboard/>,
  },
  {
    path: "/explore",
    exact: true,
    main: () => <Explore/>,
  },
  {
    path: "/integration",
    exact: true,
    main: () => <Integration/>,
  },
  {
    path: "/custom-dashboard",
    exact: true,
    main: () => <Home/>,
  },
  {
    path: "/new-dashboard",
    exact: true,
    main: () => <Navbar/>,
  },
  {
    path: "/sign-out",
    exact: true,
    main: () => <Navbar/>,
  },
  {
    path: "/sub-nav",
    exact: true,
    main: () => <SubNewPage/>,
  },
];
