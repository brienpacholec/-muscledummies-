module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Muscle Dummies",
    author: "Brien Pacholec",
    description: "Let's hit the gym!",
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-theme-material-ui`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -300,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Muscle Dummies`,
        short_name: `Muscle Dummies`,
        description: `Welome to Health and Fitness for Dummies!`,
        lang: `en`,
        start_url: `/`,
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Gagalin", "Cooper Hewitt"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mock`,
        path: `${__dirname}/src/mock`,
      },
    },
  ],
}
