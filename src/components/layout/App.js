import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  app: {
    fontFamily: theme.typography.fontFamily.body,
    '& a': {
      color: theme.palette.primary.main,
    },
    '& a:visited': {
      color: theme.palette.grey.main,
    },
    '& a:hover': {
      color: theme.palette.primary.light1,
    },
  },
}));

export default function App({ children }) {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return <div className={classes.app}>{children}</div>;
}
