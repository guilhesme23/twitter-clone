import { User } from "@types";
import React from "react";

import {
  CakeIcon,
  Container,
  EditProfile,
  Followage,
  LocationIcon,
  ProfileContent,
} from "./styles";

interface Props {
  user: User
}

const ProfileSummary: React.FC<Props> = ({ user }) => {
  const formatDate = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date(user.birthdate);

    return `${
      monthNames[date.getMonth()]
    } ${date.getDay()}, ${date.getFullYear()}`;
  };
  return (
    <Container>
      <ProfileContent>
        <h3>{user.name}</h3>
        <span>@{user.screen_name}</span>

        <p>{user.description}</p>

        <ul>
          <li>
            <CakeIcon /> Born {formatDate()}
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

      <button>
        <EditProfile>Edit profile</EditProfile>
      </button>
    </Container>
  );
};

export default ProfileSummary;
