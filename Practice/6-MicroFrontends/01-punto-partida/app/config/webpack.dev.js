const webpack = require("webpack");
const helpers = require("./helpers");
const { merge } = require("webpack-merge");
const configCommon = require("./webpack.common");

module.exports = (env = {}) =>
  merge(configCommon(env), {
    mode: "development",
    devtool: "eval-source-map",
    output: {
      filename: "[name].[contenthash].js",
    },
    devServer: {
      // Con esto le decimos que se descargue los micro frontends
      contentBase: [
        helpers.resolveFromRootPath("../microapp-clock/build/microapp"),
        helpers.resolveFromRootPath("../microapp-quote/build/microapp/"),
      ],
      // con esto le decimos que lo ponga todo aqui
      contentBasePublicPath: "/microapps",
      inline: true,
      host: "localhost",
      port: 3000,
      stats: "minimal",
      historyApiFallback: true,
      hot: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  });
