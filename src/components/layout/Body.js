import React from 'react';
import createUseStylesWithTheme from '../../styles/createUseStylesWithTheme';

const useStyles = createUseStylesWithTheme(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
    '& a': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
    },
    '& a:visited': {
      color: theme.palette.grey.main,
    },
    '& a:hover': {
      color: theme.palette.primary.light1,
    },
  },
  wrapper: {
    width: '100%',
    maxWidth: theme.misc.bodyMaxWidth,
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4),
    '& > *': {
      width: '100%',
    },
  },
}));

export default function Body({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>{children}</div>
    </div>
  );
}
