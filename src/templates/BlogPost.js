import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout/Layout';

export default function BlogPost({
  // 'data' is passed from the pageQuery at the bottom of this file.
  data: {
    mdx: {
      frontmatter: { title, date, author, tags },
      body,
    },
  },

  // 'pageContext' is passed from gatsby's createPage(), which runs on build.
  // See the top-level gatsby-node.js's createPages() function, which calls a
  // bunch of createPage().
  pageContext: { slug },
}) {
  // Compose a SEO object, to be passed by the Layout component to the
  // underlying SEO component.
  const seo = {
    title,
    type: 'article',
    author,
    url: `${process.env.BASE_URL}${slug}`,
  };

  return (
    <Layout seo={seo}>
      <h1>{title}</h1>
      <h3>{date}</h3>
      <h3>{tags}</h3>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
}

// '$slug' is provided by gatsby's createPage() in its context option.
// See the top-level gatsby-node.js's createPages() function, which calls a
// bunch of createPage().
export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "D MMM YYYY")
        author
        tags
      }
      body
    }
  }
`;
