import Layout from "components/Layout";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Layout />
        </Route>
      </Switch>
    </Router>
  );
}
