const baseSpacing = 8; // In px

export default {
  palette: {
    primary: {
      light1: '#bbdefb', // Blue 100
      light2: '#c3fdff',
      main: '#90caf9', // Blue 200
      dark1: '#64b5f6', // Blue 300
      dark2: '#5d99c6',
    },
    grey: {
      light: '#eeeeee', // Grey 200
      main: '#bdbdbd', // Grey 400
      dark: '#757575', // Grey 600
    },
  },
  typography: {
    fontFamily: {
      header: "'Comfortaa', 'Palatino','serif'",
      body: "'Open Sans', 'Arial', 'sans-serif'",
    },
  },
  breakpoints: {
    s: 768,
  },
  spacing: multiple => baseSpacing * multiple,
};
