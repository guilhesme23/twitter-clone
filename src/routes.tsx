import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <h1>Hello World</h1>
        </Route>
      </Switch>
    </Router>
  );
}
