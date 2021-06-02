import Navbar from "components/Navbar";
import ProfileBanner from "components/ProfileBanner";
import React from "react";
import { Container } from "./styles";

const Profile: React.FC = () => {
  return (
    <Container>
      <Navbar backIcon backLocation="/" title="Guiherme" sub="747 tweets" />
      <ProfileBanner
        bannerUrl="http://dummyimage.com/1500x500.png/ff4444/ffffff"
        avatarUrl="https://robohash.org/cumquamipsam.png?size=400x400&set=set1"
      />
    </Container>
  );
};

export default Profile;
