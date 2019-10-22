import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  app: {
    fontFamily: theme.typography.fontFamily.body,
  },
}));

export default function App({ children }) {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return <div className={classes.app}>{children}</div>;
}
