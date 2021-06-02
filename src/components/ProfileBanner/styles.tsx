import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 199px);
  background: var(--twitter);
  position: relative;

  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 0 100%;
    border: 0;
  }
`;

export const Avatar = styled.div`
    flex-shrink: 0;
  background: var(--gray);
  border-radius: 50%;
  border: 5px solid var(--primary);

  width: max(45px, min(135px, 22vh));
  height: max(45px, min(135px, 22vh));

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;

  z-index: 1;
  > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border: 0;
      border-radius: 50%;
  }
`;