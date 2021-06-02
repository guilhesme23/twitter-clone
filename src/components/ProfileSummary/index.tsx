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
  name: string;
  username: string;
  description: string;
  protected?: boolean;
  verified?: boolean;
  followers_count: number;
  friends_count: number;
  statuses_count: number;
  birthdate: string;
  location: string;
}

const ProfileSummary: React.FC<Props> = (props) => {
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

    const date = new Date(props.birthdate);

    return `${
      monthNames[date.getMonth()]
    } ${date.getDay()}, ${date.getFullYear()}`;
  };
  return (
    <Container>
      <ProfileContent>
        <h3>{props.name}</h3>
        <span>@{props.username}</span>

        <p>{props.description}</p>

        <ul>
          <li>
            <CakeIcon /> Born {formatDate()}
          </li>
          <li>
            <LocationIcon /> {props.location}
          </li>
        </ul>

        <Followage>
          <p>
            following <span>{props.friends_count}</span>
          </p>

          <p>
            <span>{props.followers_count}</span> followers
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
