import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Landing from "./Router/Landing";

const AppRouter = () => {
  return (
    <Router>
      <Navigator />
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
        <Route path="/awards"></Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
