const baseSpacing = 8; // In px

export default {
  palette: {
    primary: {
      light: '#c3fdff',
      main: '#90caf9',
      dark: '#5d99c6',
    },
  },
  typography: {
    fontSize: 20,
    fontFamily: {
      header: "'Open Sans', 'Arial', 'sans-serif'",
      body: "'Open Sans', 'Arial', 'sans-serif'",
    },
  },
  spacing: multiple => baseSpacing * multiple,
};
