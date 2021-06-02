import React from "react";
import { Avatar, Banner, Container } from "./styles";

interface Props {
  bannerUrl?: string;
  avatarUrl?: string;
}

const ProfileBanner: React.FC<Props> = (props) => {
  return (
    <Container>
      <Banner>
        <img src={props.bannerUrl} alt="banner" />
        <Avatar>
          <img src={props.avatarUrl} alt="avatar" />
        </Avatar>
      </Banner>
    </Container>
  );
};

export default ProfileBanner;
