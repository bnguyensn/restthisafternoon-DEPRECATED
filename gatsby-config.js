const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Rest this Afternoon',
    subtitle: 'Learn from yesterday, live for today, look to tomorrow...',
    author: 'Binh Nguyen',
    description: "Binh Nguyen's blog.",
    siteUrl: 'https://restthisafternoon.dev',
    image: path.resolve(__dirname, 'content/assets/android-chrome-512x512.png'),
    social: {
      github: 'bnguyensn',
      twitter: 'bnguyensn',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        //trackingId: 'ADD YOUR TRACKING ID HERE',
      },
    },
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Rest this Afternoon',
        short_name: 'Rest this Afternoon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#90caf9',
        display: 'minimal-ui',
        icon: 'content/assets/android-chrome-512x512.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-mdx',
  ],
};
