import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900');

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Source Sans Pro', serif;
  }

  #app {
    background-color: #F5F5F6;
    min-height: 100%;
    min-width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
