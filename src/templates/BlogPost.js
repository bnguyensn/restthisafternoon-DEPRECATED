import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout/Layout';

export default function BlogPost({
  data: {
    mdx: { body },
  },
  pageContext,
}) {
  const { slug } = pageContext;

  return (
    <Layout>
      <h1>{slug}</h1>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    mdx {
      body
    }
  }
`;
