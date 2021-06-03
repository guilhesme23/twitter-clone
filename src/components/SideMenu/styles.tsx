import {
  AiOutlineBell,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineSearch,
} from "react-icons/ai";
import { GiKiwiBird } from "react-icons/gi";
import { ImQuill } from "react-icons/im";
import styled, { css } from "styled-components";

export const Container = styled.aside`
  @media (max-width: 600px) {
    display: none;
  }

  @media (min-width: 1200px) {
    width: min(250px, 100%);

    > button:last-child {
      justify-content: center;
      margin-top: 16px;

      > svg {
        display: none;
      }
    }
  }

  background: var(--primary);
  position: relative;
`;

export const Wrapper = styled.div`
  position: sticky;
  top: 0;

  z-index: 4;

  @media (max-width: 600px) {
    display: none;
  }

  @media (min-width: 1200px) {
    width: min(250px, 100%);

    > button:last-child {
      justify-content: center;
      margin-top: 16px;

      > svg {
        display: none;
      }
    }
  }

  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 12px 12px 0 12px;
`;

const iconCss = css`
  width: 30px;
  height: 30px;

  fill: var(--white);
`;

interface ButtonFill {
  fill?: boolean;
}

export const MenuButton = styled.button<ButtonFill>`
  width: 55px;
  height: 55px;
  background-color: ${(props) => (props.fill ? "var(--twitter)" : "")};

  border-radius: 50%;

  margin-bottom: 16px;

  > span.button_caption {
    display: none;
  }

  &:hover {
    background-color: ${(props) =>
      props.fill ? "var(--twitter-light-hover)" : "var(--twitter-dark-hover)"};
    color: ${(props) => (props.fill ? "" : "var(--twitter)")};
    > svg {
      fill: ${(props) => (props.fill ? "" : "var(--twitter)")};
    }
  }

  @media (min-width: 1200px) {
    transition: width 0.2s;
    border-radius: 25px;
    color: var(--white);

    display: flex;
    align-items: center;
    justify-content: left;

    width: 100%;

    margin: 0 16px 0 16px;

    font-size: 20px;
    padding: 12px;

    > span.button_caption {
      display: inline;
      font-weight: bold;
      margin-left: 12px;
    }
  }
`;

export const BirdIcon = styled(GiKiwiBird)`
  ${iconCss}
`;

export const QuillIcon = styled(ImQuill)`
  ${iconCss}
`;

export const HomeIcon = styled(AiOutlineHome)`
  ${iconCss}
`;

export const SearchIcon = styled(AiOutlineSearch)`
  ${iconCss}
`;

export const NotificationIcon = styled(AiOutlineBell)`
  ${iconCss}
`;

export const DmIcon = styled(AiOutlineMail)`
  ${iconCss}
`;
