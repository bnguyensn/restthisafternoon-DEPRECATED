import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default function LatestPosts() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(limit: 5, sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            frontmatter {
              title
              date(formatString: "YYYY-MM-DD")
            }
          }
        }
      }
    }
  `);

  const latestPosts = data.allMarkdownRemark.edges.map(({ node }) => {
    const { frontmatter } = node;
    const { title, date } = frontmatter;

    return (
      <div key={title}>
        <h1>{title}</h1>
        <h3>{date}</h3>
      </div>
    );
  });

  return <div>{latestPosts}</div>;
}
