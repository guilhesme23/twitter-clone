import React from "react";
import MenuBottom from "components/MenuBottom";
import Profile from "Pages/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PageContainer, Wrapper } from "styles/globalStyles";
import SideMenu from "components/SideMenu";
import SideCard from "components/SideCard";

export default function AppRoutes() {
  return (
    <PageContainer>
      <Router>
        <Wrapper>
          <SideMenu />
          <Switch>
            <Route path="/">
              <Profile />
            </Route>
          </Switch>
          <SideCard />
        </Wrapper>
        <MenuBottom />
      </Router>
    </PageContainer>
  );
}
