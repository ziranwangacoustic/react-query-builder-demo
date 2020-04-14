import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system,PingFang SC,Hiragino Sans GB,Microsoft YaHei,
      Helvetica Neue,Arial,sans-serif;
  }
`;

export default GlobalStyle;
