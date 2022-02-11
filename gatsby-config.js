module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Muscle Dummies",
    author: "Brien Pacholec",
    description: "Let's hit the gym!",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-material-ui`,
    `gatsby-theme-material-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
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
