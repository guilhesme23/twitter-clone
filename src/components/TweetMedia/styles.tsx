import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  width: 100%;

  border-radius: 25px;
  margin-top: 12px;
  height: 235px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(75px, 1fr));
  grid-gap: 5px;

`;

export const Thumb = styled.div`
  background: var(--gray);

 
  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
