import React from 'react';
import tagToIcon from '../../utils/tagToIcon';
import createUseStylesWithTheme from '../../styles/createUseStylesWithTheme';

const useStyles = createUseStylesWithTheme({
  tag: {
    display: 'inline-block',
  },
});

export default function Tag({ tag }) {
  const classes = useStyles();

  return <div className={classes.tag}>{tagToIcon(tag)}</div>;
}
