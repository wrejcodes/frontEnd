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
    /* font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; */
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
    background: rgb(229,229,229);
    background: -moz-linear-gradient(top, rgba(229,229,229,1) 2%, rgba(141,209,248,1) 98%, rgba(30,87,153,1) 100%);
    background: -webkit-linear-gradient(top, rgba(229,229,229,1) 2%,rgba(141,209,248,1) 98%,rgba(30,87,153,1) 100%);
    background: linear-gradient(to bottom, rgba(229,229,229,1) 2%,rgba(141,209,248,1) 98%,rgba(30,87,153,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e5e5e5', endColorstr='#1e5799',GradientType=0 );
  }

  .header {
      max-width: 700px;
      margin: auto;
  }

  .MainBodyWrap {
    max-width: 1500px;
    margin: auto;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
