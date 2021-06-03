import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    max-width: 100vw;
    /* max-height: 100vh; */
  }

  *, button, input {
    font-family: 'Roboto', sans-serif;
    background: none;
    border: 0;
  }

  html, body, #root {
    height: 100%;
    overflow-x: hidden;
  }
  
  a {
    text-decoration: none;
    color: var(--twitter)
  }

  html {
    background: var(--primary);
    position: relative;
  }

  :root {
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2C8ED6;
  }
`;

export default GlobalStyle;

export const PageContainer = styled.div`
  background: var(--primary);
  color: var(--white);
  position: relative;
`;

export const Wrapper = styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: center;

  margin: 0 auto;
`;
