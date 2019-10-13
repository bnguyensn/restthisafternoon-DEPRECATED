import React from 'react';
import Nav from './Nav';
import useSiteMetadata from '../../hooks/graphql/useSiteMetadata';

export default function Header() {
  const data = useSiteMetadata();
  const { title, subtitle } = data;

  return (
    <header>
      <title>
        <h2>{subtitle}</h2>
        <h1>{title}</h1>
      </title>
      <Nav />
    </header>
  );
}
