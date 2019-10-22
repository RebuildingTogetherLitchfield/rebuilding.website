module.exports = {
  siteMetadata: {
    title: `Rebuilding Together Litchfield County`,
    description: `Rebuilding Together is a leading nonprofit. Our mission statement is: rebuilding homes, revitalizing communities, rebuilding lives. `,
    keywords: `housing, nonprofit, charity, elderly, low-income`,
    author: `@MRebehn`,
    siteURL: `https://rebuildingtogetherlitchfield.org`,
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
        name: `Rebuilding Together Litchfield`,
        short_name: `RTLC`,
        start_url: `/`,
        background_color: `#7ac143`,
        theme_color: `#7ac143`,
        display: `minimal-ui`,
        icon: `src/images/icons/favicon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
