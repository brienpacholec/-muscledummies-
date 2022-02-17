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
    `gatsby-theme-material-ui`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
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
