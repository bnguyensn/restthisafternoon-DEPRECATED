/**
 * Note: only 1 instance of useStaticQuery is allowed in a file:
 * https://www.gatsbyjs.org/docs/use-static-query/#known-limitations
 */

import { graphql, useStaticQuery } from 'gatsby';

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          subtitle
          author
          description
          siteUrl
          image
          social {
            github
            twitter
          }
        }
      }
    }
  `);

  return data.site.siteMetadata;
}
