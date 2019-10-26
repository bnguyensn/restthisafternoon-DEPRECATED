import React from 'react';
import createUseStylesWithTheme from '../../styles/createUseStylesWithTheme';

const useStyles = createUseStylesWithTheme(theme => ({
  container: {
    minHeight: '100vh',
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

export default function Body({ children }) {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
}
