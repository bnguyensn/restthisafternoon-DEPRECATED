import React, { useState } from 'react';
import Fab from '../functional/Fab';
import Menu from '../../assets/icons/Menu';
import Close from '../../assets/icons/Close';
import createUseStylesWithTheme from '../../styles/createUseStylesWithTheme';

const useStyles = createUseStylesWithTheme(theme => ({
  container: {
    position: 'fixed',
    bottom: theme.spacing(4.5),
    right: theme.spacing(3),
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
