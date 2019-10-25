import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { createUseStyles, useTheme } from 'react-jss';
import Tag from './functional/Tag';

const useStyles = createUseStyles(theme => ({
  list: {
    margin: 0,
    padding: theme.spacing(2),
    listStyleType: 'none',
  },

  post: { marginBottom: theme.spacing(2) },

  postTitleContainer: {
    marginBottom: theme.spacing(1),
  },
  postTitle: {
    margin: 0,
    display: 'inline-block',
    fontWeight: 900,
  },

  postDateAndTagsContainer: {
    display: 'flex',
    marginBottom: theme.spacing(1),
  },
  postDate: {},
  postDateAndTagsSeparator: {
    margin: `0 ${theme.spacing(1)}px`,
  },

  postTags: {},

  postExcerpt: {
    fontStyle: 'italic',
  },
}));

export default function LatestPosts() {
  const theme = useTheme();
  const classes = useStyles(theme);

  const data = useStaticQuery(graphql`
    query {
      allMdx(limit: 5, sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            frontmatter {
              title
              date(formatString: "D MMM YYYY")
              tags
            }
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const latestPosts = data.allMdx.edges.map(({ node }) => {
    const { frontmatter, fields, excerpt } = node;
    const { title, date, tags } = frontmatter;
    const { slug } = fields;

    const tagEls = tags.map(tag => <Tag key={tag} tag={tag} />);

    return (
      <li key={title} className={classes.post}>
        <div className={classes.postTitleContainer}>
          <Link to={slug}>
            <h2 className={classes.postTitle}>{title}</h2>
          </Link>
        </div>
        <div className={classes.postDateAndTagsContainer}>
          <div className={classes.postDate}>{date}</div>
          <div className={classes.postDateAndTagsSeparator} />
          <div className={classes.postTags}>{tagEls}</div>
        </div>
        <div className={classes.postExcerpt}>{excerpt}</div>
      </li>
    );
  });

  return (
    <div>
      <ul className={classes.list}>{latestPosts}</ul>
    </div>
  );
}
