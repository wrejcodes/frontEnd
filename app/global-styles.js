import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    margin:0;
    padding: 0;
    height: 100%;
  }

  body {
    font-family: Georgia, Times, 'Times New Roman', serif;
    background: #efefef;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
    margin:0;
    padding: 0;
    height: 100%;

  }
  .app_container {
    min-height:100%;
    position:relative;
  }

  .header {
    max-width: 700px;
    margin: auto;
    padding: 10px;
  }

  .body_wrap{
    max-width: 1300px;
    margin:auto;
    border-radius: 10px;
    margin-top: 0px;
    margin-bottom: 0px; ${''/* Padding for top of footer */}
    padding-bottom: 12em; ${''/* Height of footer plus some room */}
  }

  .footer{
    position:absolute;
    bottom: 0px;  ${''/* Padding for top of footer */}
    width: 100%;
  height: 8em; ${''/* Height of footer */}
    background: black;
    color: white;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
