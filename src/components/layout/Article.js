import React from 'react';
import createUseStylesWithTheme from '../../styles/createUseStylesWithTheme';

const useStyles = createUseStylesWithTheme(theme => ({
  article: {
    padding: theme.spacing(2),
  },
}));

export default function Article({ children }) {
  const classes = useStyles();

  return <article className={classes.article}>{children}</article>;
}
