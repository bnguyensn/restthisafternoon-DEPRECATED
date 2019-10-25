import React, { useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import Fab from '../functional/Fab';
import Menu from '../../assets/icons/Menu';
import Close from '../../assets/icons/Close';

const useStyles = createUseStyles(theme => ({
  container: {
    position: 'fixed',
    bottom: theme.spacing(4.5),
    right: theme.spacing(3),
  },
}));

export default function NavMobile() {
  const theme = useTheme();
  const classes = useStyles({ theme });

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
