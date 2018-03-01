// // The idea for this file is to check and set active in themes
//
// // SET ACTIVE THEME
// // GET ACTIVE THEME
//
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
    header_text: 'white',
    primary_text: 'black',
    secondary_text: 'white',
  }),
};

export {
  themes,
  getActive,
  setActive,
};
