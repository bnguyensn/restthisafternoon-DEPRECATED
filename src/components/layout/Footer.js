import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  footer: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.light1,
  },
}));

export default function Footer() {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const curYear = new Date(Date.now()).getFullYear();

  return (
    <footer className={classes.footer}>
      <div>Made by Binh with Gatsby, {curYear}</div>
    </footer>
  );
}
