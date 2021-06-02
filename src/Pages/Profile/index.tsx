import Navbar from "components/Navbar";
import ProfileBanner from "components/ProfileBanner";
import ProfileSummary from "components/ProfileSummary";
import React from "react";
import { Container } from "./styles";

const Profile: React.FC = () => {
  const user = {
    id: 1,
    name: "Dana Olivello",
    screen_name: "dolivello0",
    description: "User-centric human-resource adapter",
    protected: false,
    verified: false,
    followers_count: 512,
    friends_count: 8,
    statuses_count: 4856,
    profile_banner_url: "http://dummyimage.com/1500x500.png/dddddd/000000",
    profile_image_url_https:
      "https://robohash.org/utvoluptateaut.png?size=400x400&set=set1",
    email: "dolivello0@walmart.com",
    password: "1vTnnbL",
    birthdate: "9/8/1982",
    location: "Asia/Karachi",
  };

  return (
    <Container>
      <Navbar backIcon backLocation="/" title="Guiherme" sub="747 tweets" />
      <ProfileBanner
        bannerUrl={user.profile_banner_url}
        avatarUrl={user.profile_image_url_https}
      />
      <ProfileSummary 
        name={user.name}
        birthdate={user.birthdate}
        description={user.description}
        username={user.screen_name}
        followers_count={user.followers_count}
        friends_count={user.friends_count}
        location={user.location}
        statuses_count={user.statuses_count}
      />
    </Container>
  );
};

export default Profile;
