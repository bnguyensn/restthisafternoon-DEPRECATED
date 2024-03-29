import React from 'react';
import createUseStylesWithTheme from '../../styles/createUseStylesWithTheme';

const useStyles = createUseStylesWithTheme(theme => ({
  footer: {
    padding: theme.spacing(2),
    color: '#ffffff',
    backgroundColor: theme.palette.primary.dark2,
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
  },
}));

export default function Footer() {
  const classes = useStyles();

  const curYear = new Date(Date.now()).getFullYear();

  return (
    <footer className={classes.footer}>
      <div>Binh Nguyen - {curYear}</div>
    </footer>
  );
}
