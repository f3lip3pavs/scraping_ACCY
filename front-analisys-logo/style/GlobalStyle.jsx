import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
  padding: 0;
  margin: 0;
  }

  body{
  background-color: #202020;
  }

  .overall-container{
    display: flex;
    width: 67%;
    margin: auto;
    justify-content: center;
    justify-content: space-around;
  };

`