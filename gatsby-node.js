const webpack = require("webpack")
const path = require(`path`)

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: [require.resolve("buffer/"), "Buffer"],
      }),
    ],
    resolve: {
      fallback: {
        assert: require.resolve("assert/"),
        crypto: require.resolve("crypto-browserify"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        os: require.resolve("os-browserify/browser"),
        stream: require.resolve("stream-browserify"),
        util: false,
        canvas: false,
      },
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const currentCollections = [
    {
      name: "Athletes",
      tag: "Athlete",
    },
    {
      name: "Football",
      tag: "Football",
    },
    {
      name: "Mens",
      tag: "Men",
    },
    {
      name: "Womens",
      tag: "Women",
    },
  ]
  currentCollections.forEach(collection => {
    var slug = `/shop/${collection.name.replace(" ", "-").toLowerCase()}`
    createPage({
      path: `${slug}`,
      component: path.resolve("./src/templates/shop-plans.js"),
      context: {
        name: collection.name,
        tag: collection.tag,
      },
    })
  })
}
