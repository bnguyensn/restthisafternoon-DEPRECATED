import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Tag from './parts/Tag';
import createUseStylesWithTheme from '../styles/createUseStylesWithTheme';
import { capitalizeSentence } from '../utils/stringUtils';

const useStyles = createUseStylesWithTheme(theme => ({
  container: {
    padding: theme.spacing(2),
  },
  list: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },

  post: {
    marginBottom: theme.spacing(6),
  },

  postTitleContainer: {
    marginBottom: theme.spacing(1),
  },
  postTitle: {
    display: 'inline-block',
    fontSize: '1.5rem',
    '& a': {
      color: '#000000',
    },
    '& a:visited': {
      color: '#000000',
    },
    '& a:hover': {
      color: theme.palette.primary.light1,
    },
  },

  postDateAndTagsContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    fontSize: '.8rem',
  },
  postDate: {
    fontStyle: 'italic',
  },
  postDateAndTagsSeparator: {
    margin: `0 ${theme.spacing(1)}px`,
  },
  postTags: {},

  postHeadline: {},
}));

export default function LatestPosts() {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      allMdx(limit: 5, sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM D, YYYY")
              headline
              type
              tags
            }
            excerpt(pruneLength: 100)
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
    const { title, date, headline, tags } = frontmatter;
    const { slug } = fields;

    const tagEls = tags.map(tag => <Tag key={tag} tag={tag} />);

    return (
      <li key={title} className={classes.post}>
        <div className={classes.postTitleContainer}>
          <h2 className={classes.postTitle}>
            <Link to={slug}>{capitalizeSentence(title)}</Link>
          </h2>
        </div>
        <div className={classes.postDateAndTagsContainer}>
          <div className={classes.postDate}>{date}</div>
          <div className={classes.postDateAndTagsSeparator}>•</div>
          <div className={classes.postTags}>{tagEls}</div>
        </div>
        <div className={classes.postHeadline}>{headline || excerpt}</div>
      </li>
    );
  });

  return (
    <div className={classes.container}>
      <ul className={classes.list}>{latestPosts}</ul>
    </div>
  );
}
