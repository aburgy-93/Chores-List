const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-source-map", // Fast source maps for development
    devServer: {
        static: "./dist", // Serve files from the output directory
        watchFiles: ["./src/template.html"], // Watch for changes in specific files
        hot: true, // Enable hot module replacement
        open: true, // Automatically open the browser
    },
});
