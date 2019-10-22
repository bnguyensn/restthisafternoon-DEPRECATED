import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

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
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const latestPosts = data.allMdx.edges.map(({ node }) => {
    const { frontmatter, fields } = node;
    const { title, date } = frontmatter;
    const { slug } = fields;

    return (
      <li key={title}>
        <div>
          <Link to={slug}>{title}</Link>
        </div>
        <div>{date}</div>
      </li>
    );
  });

  return (
    <div>
      <h2>Latest</h2>
      <ul>{latestPosts}</ul>
    </div>
  );
}
