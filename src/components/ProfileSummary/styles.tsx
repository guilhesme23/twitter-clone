import styled, { css } from "styled-components";

import { FaBirthdayCake } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const ProfileContent = styled.div`
  margin-top: 10vh;
  margin-left: 16px;

  > h3 {
    font-size: 19px;
    font-weight: bold;
  }

  > span {
    color: var(--gray);
  }

  > p {
    margin: 1.8vw 0;
  }

  > ul {
    list-style: none;
    color: var(--gray);
  }
`;

export const Followage = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 1vw;

  > p {
    color: var(--gray);
    font-size: 14px;
  }

  > p > span {
    color: var(--white);
    font-weight: bold;
  }
`;

export const EditProfile = styled.div`
  border: 2px solid var(--twitter);
  cursor: pointer;
  color: var(--twitter);

  padding: 10px 19px;
  border-radius: 25px;

  &:hover {
    background: var(--twitter-dark-hover);
  }

  position: absolute;
  top: 2vh;
  right: 2vh;

  font-weight: bold;
`;

const iconCss = css`
  fill: var(--gray);
  width: 14px;
  height: 14px;
`;

export const CakeIcon = styled(FaBirthdayCake)`
  ${iconCss}
`;

export const LocationIcon = styled(MdLocationCity)`
  ${iconCss}
`;
