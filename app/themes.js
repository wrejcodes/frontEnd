// // The idea for this file is to check and set active in themes
//
// // SET ACTIVE THEME
// // GET ACTIVE THEME

import styled from 'styled-components';

const { Map } = require('immutable');
// const assert = require('assert');

const setActive = (activeTheme) => {
  for (let i = 0; i < themes.entries().length; i += 1) {
    if (themes.entries[i][1].active) {
      themes.entries[i][1].set('active', false);
    }
  }
  themes[activeTheme].set('active', true);
  return themes[activeTheme];
};
// };

const getActive = () => {
  try {
    for (let i = 0; i < Object.entries(themes).length; i += 1) {
      // console.log(themes[Object.entries(themes)[i][0]]);
      const temp = Object.entries(themes)[i];
      if (temp[1].get('active')) {
        // console.log(temp[1]);
        return temp[1]; // if i = 0, this is equivilant to themes.default
      } // travis did this to me
    }
    themes.default.set('active', true);
    return themes.default;
  } catch (err) {
    console.log(Error(err));
    return themes.default;
  }
};

const themes = {
  default: Map({
    active: false,
    primary: 'white',
    secondary: '#d3d3d3',
    tertiary: '#5b5b5b',
    four: 'darkgrey',
    header_text: 'black',
    primary_text: 'black',
    secondary_text: '#5b5b5b',
  }),
  blue: Map({
    // ...default,
    active: true,
    primary: 'white',
    secondary: '#a2d5e5',
    tertiary: '#9fb2db',
    four: 'lightgrey',
    header_text: 'white',
    primary_text: 'black',
    secondary_text: 'white',
  }),
};

// Styled Elements
const styledElements = {
  Input: styled.input`
        border: 1px solid black;
        margin-left: 5px;
        margin-bottom: 5px;
        border-radius: 5px;
        background-color: lavender;
      `,
  Submit: styled.input`
        border: 1px solid black;
        margin-left: 5px;
        margin-bottom: 5px;
        background-color: #A1D4E3;
        border-radius: 5px;
      `,
  Header: styled.h1`
        border-radius:10px;
        margin-bottom: 75px;
        text-align: center;
        background-color: #373c42;
        color: white;
        border: 2px solid #000000;
      `,
  Select: styled.select`
        border: 1px solid black;
        margin-left: 5px;
        background-color: lavender;
        margin-bottom: 5px;
      `,
  NavWrap: styled.div`
        height: 50px;
        width: 100%;
        background-color: grey;
        display: -webkit-flex;
        display: flex;
      `,
};

export {
  themes,
  getActive,
  setActive,
  styledElements,
};
