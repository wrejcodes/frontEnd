import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Georgia, Times, 'Times New Roman', serif;
    background: rgb(229,229,229);
    background: -moz-linear-gradient(top, rgba(229,229,229,1) 2%, rgba(141,209,248,1) 98%, rgba(30,87,153,1) 100%);
    background: -webkit-linear-gradient(top, rgba(229,229,229,1) 2%,rgba(141,209,248,1) 98%,rgba(30,87,153,1) 100%);
    background: linear-gradient(to bottom, rgba(229,229,229,1) 2%,rgba(141,209,248,1) 98%,rgba(30,87,153,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e5e5e5', endColorstr='#1e5799',GradientType=0 );
    /* font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; */
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  .header {
      max-width: 700px;
      margin: auto;
  }

  .MainBodyWrap {

  }
  .body_wrap{
    background-color:white;
    max-width: 1300px;
    margin:auto;
    border: 1px solid grey;
    border-radius: 10px;
    margin-top: 10px;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
