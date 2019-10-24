import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    minHeight: '100vh',
  },
});

export default function Body({ children }) {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
}
