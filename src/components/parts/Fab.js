import React from 'react';
import clsx from 'clsx';
import createUseStylesWithTheme from '../../styles/createUseStylesWithTheme';

const useStyles = createUseStylesWithTheme({
  fab: ({ theme, backgroundColor }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: `1px solid rgba(255, 255, 255, 0.1)`,
    backgroundColor: backgroundColor || theme.palette.primary.main,
    boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
  }),

  fabText: ({ theme }) => ({
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    borderRadius: 10,
    fontSize: '1.5rem',
    color: '#ffffff',
  }),

  fabIcon: {
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    '& > *': {
      display: 'block',
      width: '1.5rem',
      height: '1.5rem',
      fill: '#ffffff',
    },
  },
});

export default function Fab({ type, onClick, children, ...props }) {
  const classes = useStyles({ ...props });

  const typeClass =
    type === 'hybrid'
      ? classes.fabHybrid
      : type === 'text'
      ? classes.fabText
      : classes.fabIcon;

  return (
    <div className={clsx(classes.fab, typeClass)} onClick={onClick}>
      {children}
    </div>
  );
}
