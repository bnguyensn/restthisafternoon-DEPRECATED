import React from 'react';
import Layout from '../components/layout/Layout';
import NotFound from '../components/layout/NotFound';

export default function NotFoundPage() {
  const seo = {
    title: '404 Not Found',
    description: 'Page not found',
  };

  return (
    <Layout seo={seo}>
      <NotFound />
    </Layout>
  );
}
