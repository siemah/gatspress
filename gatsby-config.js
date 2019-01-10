require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: `Siemah Lsidem`,
    description: `Siemah lsidem website to make programming nice & funny`,
    author: `@siemah`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: process.env.WORDPRESS_BASEURL,
        protocol: process.env.WORDPRESS_PROTOCOL,
        hostingWPCOM: (process.env.WORDPRESS_WPCOM === false),
        useACF: false,
        verboseOutput: process.env.WORDPRESS_VERBOSE,
        includedRoutes: [
          "**/*/*/categories",
          "**/*/*/posts",
          "**/*/*/pages",
          "**/*/*/media",
          "**/*/*/tags",
          "**/*/*/taxonomies",
          "**/*/*/users",
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    // add some configuration by @author siemah
    
  ],
}
