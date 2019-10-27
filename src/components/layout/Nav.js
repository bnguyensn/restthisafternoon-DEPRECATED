import React from 'react';
import { Link } from 'gatsby';
import createUseStylesWithTheme from '../../styles/createUseStylesWithTheme';

const useStyles = createUseStylesWithTheme(theme => ({
  navContainer: {
    display: 'flex',
  },
  navLink: {
    margin: `0 ${theme.spacing(2)}px`,
  },
}));

function NavLink({ to, children }) {
  const classes = useStyles();

  return (
    <div className={classes.navLink}>
      <Link to={to}>{children}</Link>
    </div>
  );
}

export default function Nav() {
  const classes = useStyles();

  return (
    <nav className={classes.navContainer}>
      <NavLink to={'/about'}>About</NavLink>
      <NavLink to={'/archive'}>Archive</NavLink>
    </nav>
  );
}
