import React from 'react';
import Helmet from 'react-helmet';
import useSiteMetadata from '../../hooks/graphql/useSiteMetadata';

export default function SEO({
  title,
  subtitle,
  author,
  description,
  siteUrl,
  image,
  social,
}) {
  // Grab default data
  const defaultSiteMetadata = useSiteMetadata();
  const {
    title: defaultTitle,
    subtitle: defaultSubtitle,
    author: defaultAuthor,
    description: defaultDescription,
    siteUrl: defaultSiteUrl,
    image: defaultImage,
    social: defaultSocial,
  } = defaultSiteMetadata;
  const { twitter: defaultTwitter, github: defaultGithub } = defaultSocial;

  return (
    <Helmet title={title || defaultTitle}>
      <meta name="description" content={description || defaultDescription} />
      <meta name="image" content={image || defaultImage} />
      <meta name="author" content={author || defaultAuthor} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={siteUrl || defaultSiteUrl} />
    </Helmet>
  );
}
