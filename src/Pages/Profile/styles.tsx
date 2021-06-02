import styled from 'styled-components';

export const Container = styled.div`
  width: min(601px, 100%);
  height: 100%;
  display: flex;

  flex-direction: column;

  @media (min-width: 601px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }

`;
