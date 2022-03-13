require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Muscle Dummies",
    author: "Brien Pacholec",
    description: "Merging Health & Fitness with the Technology industry.",
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
        offset: -250,
        duration: 500,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-QDWYR07BM1", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
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
  ],
}
