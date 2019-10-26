import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout/Layout';
import Article from '../components/layout/Article';
import tagToIcon from '../utils/tagToIcon';
import Code from '../components/parts/Code';

const components = {
  pre: props => <div {...props} />,
  code: Code,
};

export default function BlogPost({
  // 'data' is received from the pageQuery at the bottom of this file.
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
      <Article>
        <h1>{title}</h1>
        <div>
          <div style={{ display: 'inline-block' }}>{date}</div>
          <div style={{ display: 'inline-block' }}>{tagToIcon(tags)}</div>
        </div>
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </Article>
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
