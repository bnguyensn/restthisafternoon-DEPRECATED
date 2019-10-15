import React from 'react';
import Helmet from 'react-helmet';
import useSiteMetadata from '../../hooks/graphql/useSiteMetadata';

export default function SEO({ title, type, author, description, url, image }) {
  // Grab default data (only used if the corresponding data is not provided via
  // props).
  const defaultSiteMetadata = useSiteMetadata();
  const {
    title: defaultTitle,
    author: defaultAuthor,
    description: defaultDescription,
    url: defaultUrl,
    image: defaultImage,
  } = defaultSiteMetadata;

  return (
    <Helmet title={title || defaultTitle}>
      <meta name="description" content={description || defaultDescription} />
      <meta name="image" content={image || defaultImage} />
      <meta name="author" content={author || defaultAuthor} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:type" content={type || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || defaultUrl} />
    </Helmet>
  );
}
