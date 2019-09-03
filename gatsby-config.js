module.exports = {
  siteMetadata: {
    title: `Gatsby Strapi Starter`,
    description: `Kick off your next, Gatsby project using Strapi CMS with Bootstrap included.`,
    author: `Oskari Pöntinen`,
  },
  plugins: [

    `gatsby-plugin-react-helmet`,
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
        name: `Gatsby Bootstrap Starter`,
        short_name: `Gatsby Bootstrap`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },

    /**
     * This plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.dev/offline
     */
    // `gatsby-plugin-offline`,


    /**
     * This plugin transforms Markdown from source plugins into HTML.
     * See https://www.gatsbyjs.org/packages/gatsby-transformer-remark/
     */
    `gatsby-transformer-remark`,

    /**
     * This plugin enables to fetch data with Gatsby from Strapi CMS.
     * See https://www.npmjs.com/package/gatsby-source-strapi
     */
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        contentTypes: [ 
          // List of the Content Types you want to be able to request from Gatsby.
          'article'
        ],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: "",
          password: "",
        },
        queryLimit: 1000,
      },
    },
  ],
}
