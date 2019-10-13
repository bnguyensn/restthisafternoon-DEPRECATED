import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/meta/SEO';
import LatestPosts from '../components/LatestPosts';

export default function Index() {
  return (
    <Layout>
      <SEO />
      <LatestPosts />
    </Layout>
  );
}
