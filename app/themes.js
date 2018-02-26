// // The idea for this file is to check and set active in themes
//
// // SET ACTIVE THEME
// // GET ACTIVE THEME
//
const { Map } = require('immutable');

const setActive = (activeTheme) => {
  themes.values((val) => {
    if (val.active) {
      val.set('active', false);
    }
  });
  themes[activeTheme].active = true;
};

const getActive = () => {
  // for(var theme in themes) {
  //   if(theme.active){ return theme;}
  //   else {
  //     return themes.default;
  //   }
  // }
};

const themes = {
  default: Map({
    active: true,
    primary: 'white',
    secondary: '#d3d3d3',
    tertiary: '#5b5b5b',
    header_text: 'black',
    primary_text: 'black',
    secondary_text: '#5b5b5b',
  }),
  blue: Map({
    // ...default,
    active: false,
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


//
// const defaultTheme = ()=>{
//   this.active = True;
//   this.primary = 'white';
//   this.secondary = '#d3d3d3';
//   this.tertiary = '#5b5b5b';
//   this.header_text = 'black';
//   this.primary_text = 'black';
//   this.secondary_text = '#5b5b5b';
// }
//
// const themes = {
//   default: defaultTheme.apply(this, arguments),
//   blue: {
//     active: False,
//     primary: 'white',
//     secondary: '#a2d5e5',
//     tertiary: '#9fb2db',
//     header_text: 'white',
//     primary_text: 'black',
//     secondary_text: 'white',
//   },
// };
