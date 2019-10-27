import React from 'react';
import { Link } from 'gatsby';
import Nav from './Nav';
import useSiteMetadata from '../../hooks/useSiteMetadata';
import createUseStylesWithTheme from '../../styles/createUseStylesWithTheme';

const useStyles = createUseStylesWithTheme(theme => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px`,
    fontFamily: theme.typography.fontFamily.header,
    backgroundColor: theme.palette.primary.dark2,
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.3)',
    '& a': {
      color: '#ffffff',
      textDecoration: 'none',
    },
    '& a:visited': {
      color: '#ffffff',
    },
    '& a:hover': {
      color: '#ffffff',
    },
  },

  title: {
    margin: 0,
    width: '100%',
    color: theme.palette.primary.main,
    fontSize: '1rem',
  },

  navContainer: {
    display: 'none',
    flexGrow: 1,
  },

  [`@media (min-width: ${theme.breakpoints.s}px)`]: {
    navContainer: {
      display: 'inline-block',
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  const data = useSiteMetadata();
  const { title } = data;

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>
        <Link to="/">{title}</Link>
      </h1>
      <div className={classes.navContainer}>
        <Nav />
      </div>
    </header>
  );
}
