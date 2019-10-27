import React, { useState } from 'react';
import { navigate } from 'gatsby';
import clsx from 'clsx';
import Fab from '../parts/Fab';
import Menu from '../../assets/icons/Menu';
import Close from '../../assets/icons/Close';
import createUseStylesWithTheme from '../../styles/createUseStylesWithTheme';

const useStyles = createUseStylesWithTheme(theme => ({
  menuButtonContainer: {
    position: 'fixed',
    display: 'block',
    bottom: theme.spacing(4.5),
    right: theme.spacing(3),
  },

  navButtonsContainer: {
    position: 'fixed',
    '& :nth-child(1)': {
      bottom: theme.spacing(14.5),
    },
    '& :nth-child(2)': {
      bottom: theme.spacing(24.5),
    },
    '& :nth-child(3)': {
      bottom: theme.spacing(34.5),
    },
  },

  navButton: {
    position: 'fixed',
  },

  navButtonShown: {
    right: theme.spacing(3),
    transform: `translate(0, 0)`,
    transition: `right .2s ${theme.speed.decelerateEasing}, transform .2s ${theme.speed.decelerateEasing}`,
  },

  navButtonHidden: {
    right: 0,
    transform: `translate(110%, 0)`,
    transition: `right .2s ${theme.speed.accelerateEasing}, transform .2s ${theme.speed.accelerateEasing}`,
  },

  [`@media (min-width: ${theme.breakpoints.s}px)`]: {
    menuButtonContainer: {
      display: 'none',
    },
    navButtonsContainer: {
      display: 'none',
    },
  },
}));

function NavButton({ navMenuOpen, setNavMenuOpen, to, children }) {
  const classes = useStyles();

  const shownClass = navMenuOpen
    ? classes.navButtonShown
    : classes.navButtonHidden;

  const handleClick = () => {
    setNavMenuOpen(!navMenuOpen);
    navigate(to);
  };

  return (
    <div className={clsx(classes.navButton, shownClass)}>
      <Fab type="text" onClick={handleClick}>
        {children}
      </Fab>
    </div>
  );
}

function NavButtons({ navMenuOpen, setNavMenuOpen }) {
  const classes = useStyles();

  return (
    <nav className={classes.navButtonsContainer}>
      <NavButton
        to={'/'}
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={setNavMenuOpen}
      >
        Home
      </NavButton>
      <NavButton
        to={'/about'}
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={setNavMenuOpen}
      >
        About
      </NavButton>
      <NavButton
        to={'/archive'}
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={setNavMenuOpen}
      >
        Archive
      </NavButton>
    </nav>
  );
}

function MenuButton({ navMenuOpen, setNavMenuOpen }) {
  const classes = useStyles();

  const handleOpenMenu = () => {
    setNavMenuOpen(!navMenuOpen);
  };

  return (
    <div className={classes.menuButtonContainer}>
      <Fab type="icon" onClick={handleOpenMenu}>
        {navMenuOpen ? <Close /> : <Menu />}
      </Fab>
    </div>
  );
}

export default function NavMobile() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  return (
    <>
      <MenuButton navMenuOpen={navMenuOpen} setNavMenuOpen={setNavMenuOpen} />
      <NavButtons navMenuOpen={navMenuOpen} setNavMenuOpen={setNavMenuOpen} />
    </>
  );
}
