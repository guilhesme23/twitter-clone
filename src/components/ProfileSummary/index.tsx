import { User } from "@types";
import React from "react";
import formatDate from "utils/formatDate";

import {
  CakeIcon,
  Container,
  EditProfile,
  Followage,
  LocationIcon,
  ProfileContent,
} from "./styles";

interface Props {
  user: User;
}

const ProfileSummary: React.FC<Props> = ({ user }) => {
  
  return (
    <Container>
      <ProfileContent>
        <h3>{user.name}</h3>
        <span>@{user.screen_name}</span>

        <p>{user.description}</p>

        <ul>
          <li>
            <CakeIcon /> Born {formatDate(user.birthdate)}
          </li>
          <li>
            <LocationIcon /> {user.location}
          </li>
        </ul>

        <Followage>
          <p>
            following <span>{user.friends_count}</span>
          </p>

          <p>
            <span>{user.followers_count}</span> followers
          </p>
        </Followage>
      </ProfileContent>

      <EditProfile outlined >Edit profile</EditProfile>
    </Container>
  );
};

export default ProfileSummary;
