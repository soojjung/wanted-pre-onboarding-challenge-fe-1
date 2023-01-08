import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;

    font-family: 'SF Pro Display', sans-serif;
  }

  input {
    font-family: 'Rowdies', cursive;
  }

  button {
    cursor: pointer;
  }

  button {
    cursor:pointer;
  }
`;
export default GlobalStyle;
