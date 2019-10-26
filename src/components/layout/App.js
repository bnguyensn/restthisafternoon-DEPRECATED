import React from 'react';
import createUseStylesWithTheme from '../../styles/createUseStylesWithTheme';

const useStyles = createUseStylesWithTheme(theme => ({
  app: {
    fontFamily: theme.typography.fontFamily.body,

    // Header fonts
    '& h1, h2, h3, h4, h5, h6': {
      fontFamily: theme.typography.fontFamily.header,
    },
  },
}));

export default function App({ children }) {
  const classes = useStyles();

  return <div className={classes.app}>{children}</div>;
}
