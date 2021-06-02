import Profile from "Pages/Profile";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PageContainer, Wrapper } from "styles/globalStyles";

export default function AppRoutes() {
  return (
    <PageContainer>
      <Wrapper>
        <Router>
          <Switch>
            <Route path="/">
              <Profile />
            </Route>
          </Switch>
        </Router>
      </Wrapper>
    </PageContainer>
  );
}
