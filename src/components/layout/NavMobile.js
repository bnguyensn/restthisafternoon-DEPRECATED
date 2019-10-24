import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import Fab from '../functional/Fab';
import Menu from '../../assets/icons/Menu';

const useStyles = createUseStyles(theme => ({
  container: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
}));

export default function NavMobile() {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const handleOpenMenu = () => {
    console.log('Open menu!');
  };

  return (
    <div className={classes.container}>
      <Fab onClick={handleOpenMenu}>
        <Menu />
      </Fab>
    </div>
  );
}
