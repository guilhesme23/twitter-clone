import React from "react";
import {
  BirdIcon,
  Container,
  DmIcon,
  HomeIcon,
  MenuButton,
  NotificationIcon,
  QuillIcon,
  SearchIcon,
  Wrapper,
} from "./styles";

// import { Container } from './styles';

const SideMenu: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuButton>
          <BirdIcon />
        </MenuButton>
        <MenuButton>
          <HomeIcon />
          <span className="button_caption">Home</span>
        </MenuButton>
        <MenuButton>
          <SearchIcon />
          <span className="button_caption">Search</span>
        </MenuButton>
        <MenuButton>
          <NotificationIcon />
          <span className="button_caption">Notifications</span>
        </MenuButton>
        <MenuButton>
          <DmIcon />
          <span className="button_caption">Messages</span>
        </MenuButton>
        <MenuButton fill>
          <QuillIcon />
          <span className="button_caption">Tweet</span>
        </MenuButton>
      </Wrapper>
    </Container>
  );
};

export default SideMenu;
