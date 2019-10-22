import React from 'react';
import Layout from '../components/layout/Layout';
import LatestPosts from '../components/LatestPosts';

export default function Index() {
  return (
    <Layout>
      <h1>Hello, world!</h1>
      <LatestPosts />
    </Layout>
  );
}
