import styled from 'styled-components';
import {BiArrowBack} from 'react-icons/bi';

export const Container = styled.div`
  background: var(--primary);
  color: var(--white);
  position: sticky;
  top: 0;
  
  border-bottom: 2px solid var(--outline);
  z-index: 2;
  padding: .5em;
  max-width: 601px;
  display: flex;

  > button {
      padding: 8px;
      border-radius: 50%;

      cursor: pointer;
      
      &:hover {
        background-color: var(--twitter-dark-hover);
      }
  }

`;

export const NavContent = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 1em;
  justify-content: left;

  strong {
    font-size: 19px;
  }

  span {
    font-size: 15px;
    color: var(--gray)
  }
`;

export const BackIcon = styled(BiArrowBack)`
    width: 24px;
    height: 24px;

    fill: var(--twitter);
`;