const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development", // Specifies the mode for Webpack
    devtool: "eval-source-map", // Enables source maps for debugging
    devServer: {
        watchFiles: ["./src/template.html"],
    },
});
