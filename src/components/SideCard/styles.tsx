import { SearchIcon } from "components/SideMenu/styles";
import styled from "styled-components";

export const Container = styled.aside`
  width: min(300px, 100%);

  display: flex;
  align-items: center;

  flex-direction: column;
`;

export const SearchBar = styled.div`
  position: sticky;
  top: 0;

  background: var(--primary);

  display: flex;
  align-items: center;

  width: 100%;
  height: 61px;

  > div {
    width: 100%;

    margin: 6px 12px;
    padding: 12px;
    border-radius: 25px;

    background: var(--secondary);
    display: flex;
    align-items: center;

    > span {
      padding: 0 6px;
      > svg {
        height: 24px;
        width: 24px;
        fill: var(--outline);
      }
    }

    > input {
      color: var(--white);
      font-size: 15px;
      margin-left: 12px;
      outline: 0;
    }
  }
`;

export const SearchButton = styled(SearchIcon)``;
