import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  fab: ({ backgroundColor, theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '3.75rem',
    height: '3.75rem',
    borderRadius: '50%',
    border: `1px solid rgba(255, 255, 255, 0.1)`,
    color: '#ffffff',
    backgroundColor: backgroundColor || theme.palette.primary.main,
    boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    '& > *': {
      display: 'block',
      width: '50%',
      height: '50%',
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
