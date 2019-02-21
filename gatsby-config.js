module.exports = {

  // Om sidan ska ligga som subdomän ex; lapplandsdjurklinik.se/nyheter MÅSTE det ligga ett korrekt pathPrefix, annar länkas resurser direkt till huvud-domänet.
  // I dagsläget endast under utveckling, då används detta väl kända begrepp "skosegnose".
  pathPrefix: `/skosegnose`,


  siteMetadata: {
    title: `Nyheter`,
    description: `Getting data from WordPress into GatbyJS install.`,
    author: `fat brothers ab`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your wordpress source
        baseUrl: `lapplandsdjurklinik.se`,
        protocol: `http`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true,
        // Exkluderar en del information som inte behövs till detta projekt. Snabbar upp "gatsby develop" processen.
        excludedRoutes: [
          "**/*/*/categories",
          "**/*/*/pages",
          "**/*/*/comments",
          "**/*/*/tags",
          "**/*/*/taxonomies",
          "**/*/*/users",
          "**/*/*/types",
          "**/*/*/statuses",
          "**/*/*/search",]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
