import React from 'react';
import { Link } from 'gatsby';
import { createUseStyles, useTheme } from 'react-jss';
import Nav from './Nav';
import useSiteMetadata from '../../hooks/graphql/useSiteMetadata';

const useStyles = createUseStyles(theme => ({
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px`,
    fontFamily: theme.typography.fontFamily.header,
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    },
    '& a:visited': {
      color: 'inherit',
    },
    '& a:hover': {
      color: theme.palette.primary.light1,
    },
  },
  title: {
    margin: `${theme.spacing(1)}px 0 0 0`,
    width: '100%',
    color: theme.palette.primary.main,
    fontSize: '2.5rem',
  },
  subTitle: {
    margin: 0,
    width: '100%',
    color: theme.palette.grey.main,
    fontSize: '1rem',
    fontStyle: 'italic',
  },
  divider: {
    height: 2,
    width: '100%',
    backgroundColor: theme.palette.primary.dark2,
  },
  [`@media (min-width: ${theme.breakpoints.s}px)`]: {
    title: {
      fontSize: '3rem',
    },
    subTitle: {
      fontSize: '1.25rem',
    },
  },
}));

export default function Header() {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const data = useSiteMetadata();
  const { title, subtitle } = data;

  return (
    <header className={classes.header}>
      <h3 className={classes.subTitle}>{subtitle}</h3>
      <h1 className={classes.title}>
        <Link to="/">{title}</Link>
      </h1>
      <div className={classes.divider} />
      <Nav />
    </header>
  );
}
