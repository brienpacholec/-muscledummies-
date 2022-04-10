const webpack = require("webpack")

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
