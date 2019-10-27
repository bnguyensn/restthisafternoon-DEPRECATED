import React, { useState } from 'react';
import Fab from '../parts/Fab';
import Menu from '../../assets/icons/Menu';
import Close from '../../assets/icons/Close';
import createUseStylesWithTheme from '../../styles/createUseStylesWithTheme';

const useStyles = createUseStylesWithTheme(theme => ({
  container: {
    position: 'fixed',
    display: 'block',
    bottom: theme.spacing(4.5),
    right: theme.spacing(3),
  },
  [`@media (min-width: ${theme.breakpoints.s}px)`]: {
    container: {
      display: 'none',
    },
  },
}));

export default function NavMobile() {
  const classes = useStyles();

  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setNavMenuOpen(!navMenuOpen);
  };

  return (
    <div className={classes.container}>
      <Fab onClick={handleOpenMenu}>{navMenuOpen ? <Close /> : <Menu />}</Fab>
    </div>
  );
}
