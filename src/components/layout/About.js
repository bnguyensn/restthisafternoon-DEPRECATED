import React from 'react';
import createUseStylesWithTheme from '../../styles/createUseStylesWithTheme';

const useStyles = createUseStylesWithTheme(theme => ({
  container: {},
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <p>
        My name is Binh. I created this site to hold my writings in an effort to
        transition from being a pure content consumer to a content creator.
      </p>
      <h2>Things I've Created</h2>
      <p>Some stuff...</p>
      <h2>Things I Know</h2>
      <p>My CV here...</p>
      <h2>Contacts</h2>
      <p>Facebook</p>
      <p>Twitter</p>
      <p>Google +</p>
    </div>
  );
}
