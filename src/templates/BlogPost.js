import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout/Layout';
import Article from '../components/layout/Article';
import Code from '../components/parts/Code';
import ArticleFrontmatter from '../components/layout/ArticleFrontmatter';
import ArticleBody from '../components/layout/ArticleBody';

const components = {
  pre: props => <div {...props} />,
  code: Code,
};

export default function BlogPost(props) {
  // 'data' is received from the pageQuery at the bottom of this file.
  // 'pageContext' is passed from gatsby's createPage(), which runs on build.
  // See the top-level gatsby-node.js's createPages() function, which calls a
  // bunch of createPage().
  const { data, pageContext } = props;
  const {
    mdx: {
      frontmatter: { title, date, author, tags },
      body,
    },
  } = data;
  const { slug } = pageContext;

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
        <ArticleFrontmatter title={title} date={date} tags={tags} />
        <ArticleBody>
          <MDXProvider components={components}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </ArticleBody>
      </Article>
    </Layout>
  );
}

// '$slug' is provided by gatsby's createPage() in its context option.
// createPage() is defined in the top-level 'gatsby-node.js' file, and called
// during the build phase whenever Gatsby creates a page.
export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        author
        tags
      }
      body
    }
  }
`;
