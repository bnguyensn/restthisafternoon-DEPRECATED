import React from 'react';
import createUseStylesWithTheme from '../../styles/createUseStylesWithTheme';

const useStyles = createUseStylesWithTheme(theme => ({
  article: {},
}));

export default function Article({ children }) {
  const classes = useStyles();

  return <article className={classes.article}>{children}</article>;
}
