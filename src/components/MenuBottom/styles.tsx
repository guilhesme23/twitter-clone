import {
  AiOutlineBell,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineSearch,
} from "react-icons/ai";
import styled, { css } from "styled-components";

export const Container = styled.div`
  @media (min-width: 600px) {
    display: none;
  }

  height: 61px;
  width: 100%;
`;

export const Padding = styled.div``;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;

  height: 61px;
  width: 100%;

  background: var(--primary);
  border-top: 1px solid var(--outline);

  display: flex;
  align-items: center;
  justify-content: space-evenly;

`;

const iconCss = css`
  width: 35px;
  height: 35px;
  fill: var(--outline);
  margin: 12px;

  cursor: pointer;
`;

export const HomeButton = styled(AiOutlineHome)`
  ${iconCss}
`;

export const SearchButton = styled(AiOutlineSearch)`
  ${iconCss}
`;

export const NotificationButton = styled(AiOutlineBell)`
  ${iconCss}
`;

export const DmButton = styled(AiOutlineMail)`
  ${iconCss}
`;
