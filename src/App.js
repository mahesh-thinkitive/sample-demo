import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import { appRoutes } from "./utils/routes";

function App() {
  return (
    <Router>
      <p>learn react</p>
      <Switch>
        {appRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
