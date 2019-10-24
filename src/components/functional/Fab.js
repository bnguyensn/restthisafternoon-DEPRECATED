import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  fab: ({ backgroundColor, theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    color: '#ffffff',
    backgroundColor: backgroundColor || theme.palette.primary.main,
    cursor: 'pointer',
    '& > *': {
      display: 'block',
      width: '80%',
      height: '80%',
      fill: '#ffffff',
    },
  }),
});

export default function Fab({ onClick, children, ...props }) {
  const theme = useTheme();
  const classes = useStyles({ theme, ...props });

  return (
    <div className={classes.fab} onClick={onClick}>
      {children}
    </div>
  );
}
