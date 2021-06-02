import styled from "styled-components";

export const Container = styled.div``;

export const TabContainer = styled.div`
  color: var(--twitter);
  border-bottom: 1px solid var(--outline);

  > ul {
    display: flex;
    justify-content: space-between;
    margin-top: 2vw;
    align-items: center;
  }

  > ul > li {
    display: flex;
    justify-content: center;
    align-items: center;

    list-style: none;

    text-align: center;
    font-size: 16px;
    font-weight: bold;

    width: 100%;
    height: 53px;
    &:hover {
      background-color: var(--twitter-dark-hover);
    }

    &.active-tab {
        border-bottom: 3px solid var(--twitter);
    }
  }
`;

export const TabContent = styled.div`
`;

export const LabelContent = styled.div`
`;