const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production", // Use production mode to enable optimizations
    devtool: "source-map", // Use source-map for better debugging in production
    optimization: {
        minimize: true, // Minimize the output for production
    },
});
