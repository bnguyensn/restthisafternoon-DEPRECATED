import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import clsx from 'clsx';
import Nav from './Nav';
import useSiteMetadata from '../../hooks/graphql/useSiteMetadata';

const useStyles = createUseStyles(theme => ({
  header: {
    padding: `${theme.spacing(2)}px`,
    fontFamily: theme.typography.fontFamily.header,
  },
  title: {
    margin: 0,
    color: theme.palette.primary.dark,
    fontSize: '2.5rem',
  },
  subTitle: {
    display: 'none',
    margin: 0,
    color: theme.palette.grey.main,
    fontStyle: 'italic',
  },
  [`@media (min-width: ${theme.breakpoints.s}px)`]: {
    title: {
      margin: `${theme.spacing(1)}px 0 0 ${theme.spacing(2)}px`,
      fontSize: '3rem',
    },
    subTitle: { display: 'block' },
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
      <h1 className={classes.title}>{title}</h1>
      <Nav />
    </header>
  );
}
