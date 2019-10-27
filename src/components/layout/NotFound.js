import React from 'react';
import createUseStylesWithTheme from '../../styles/createUseStylesWithTheme';

const useStyles = createUseStylesWithTheme(theme => ({
  container: {
    textAlign: 'center',
  },
  p1: {
    marginBottom: '2rem',
    fontFamily: theme.typography.fontFamily,
    fontSize: '2rem',
  },
  p2: {},
}));

export default function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2 className={classes.p1}>Page not found!</h2>
      <div className={classes.p2}>
        The page you're looking for doesn't exist... 😅
      </div>
    </div>
  );
}
