import { User } from "@types";
import Navbar from "components/Navbar";
import ProfileBanner from "components/ProfileBanner";
import ProfileSummary from "components/ProfileSummary";
import Tabs, { Label } from "components/Tabs";
import React, { useState } from "react";
import slugify from "utils/slugfy";
import { Container } from "./styles";

const Profile: React.FC = () => {
  const [ user ] = useState<User>({
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
  });

  const tags = ["Tweets", "Replies", "Media", "Likes"];

  return (
    <Container>
      <Navbar backIcon backLocation="/" title={user.name} sub={`${user.statuses_count} tweets`} />
      <ProfileBanner
        bannerUrl={user.profile_banner_url}
        avatarUrl={user.profile_image_url_https}
      />
      <ProfileSummary 
        user={user}
      />

      <Tabs labels={tags} baseQuery={user.screen_name}>
        {tags.map(tag => {
          return (
            <Label key={tag} label={slugify(tag)}>
              <h1>Content: {tag}</h1>
            </Label>
          );
        })}
      </Tabs>
    </Container>
  );
};

export default Profile;
