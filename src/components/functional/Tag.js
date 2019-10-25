import React from 'react';
import { createUseStyles } from 'react-jss';
import tagToIcon from '../../utils/tagToIcon';

const useStyles = createUseStyles({
  tag: {
    display: 'inline-block',
  },
});

export default function Tag({ tag }) {
  const classes = useStyles();

  return <div className={classes.tag}>{tagToIcon(tag)}</div>;
}
