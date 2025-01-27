const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map", // Detailed source maps for production debugging
    optimization: {
        minimize: true, // Enable minification
        splitChunks: {
            chunks: "all", // Split vendor and application code for caching
        },
    },
});
