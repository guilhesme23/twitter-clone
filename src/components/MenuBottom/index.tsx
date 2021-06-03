import React from "react";

import {
  Container,
  DmButton,
  Footer,
  HomeButton,
  NotificationButton,
  Padding,
  SearchButton,
} from "./styles";

const MenuBottom: React.FC = () => {
  return (
    <Container>
      <Padding />
      <Footer>
        <HomeButton />
        <SearchButton />
        <NotificationButton />
        <DmButton />
      </Footer>
    </Container>
  );
};

export default MenuBottom;
