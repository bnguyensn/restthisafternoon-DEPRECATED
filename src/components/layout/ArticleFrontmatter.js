import React from 'react';
import createUseStylesWithTheme from '../../styles/createUseStylesWithTheme';
import { capitalizeSentence } from '../../utils/stringUtils';
import Tag from '../parts/Tag';

const useStyles = createUseStylesWithTheme(theme => ({
  frontmatterContainer: {
    marginBottom: theme.spacing(4),
  },

  postTitle: {
    marginBottom: theme.spacing(1),
    fontSize: '1.5rem',
  },

  postDateAndTagsContainer: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '.8rem',
  },
  postDate: {
    fontStyle: 'italic',
  },
  postDateAndTagsSeparator: {
    margin: `0 ${theme.spacing(1)}px`,
  },
  postTags: {},
}));

export default function ArticleFrontmatter({ title, date, tags }) {
  const classes = useStyles();

  const tagEls = tags.map(tag => <Tag key={tag} tag={tag} />);

  return (
    <div className={classes.frontmatterContainer}>
      <h2 className={classes.postTitle}>{capitalizeSentence(title)}</h2>
      <div className={classes.postDateAndTagsContainer}>
        <div className={classes.postDate}>{date}</div>
        <div className={classes.postDateAndTagsSeparator}>•</div>
        <div className={classes.postTags}>{tagEls}</div>
      </div>
    </div>
  );
}
