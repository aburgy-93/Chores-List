const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true, // Cleans the output directory before each build
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"], // For handling CSS files
            },
            {
                test: /\.html$/i,
                loader: "html-loader", // For processing HTML templates
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource", // For handling images as separate assets
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html", // Template for the output HTML file
        }),
    ],
};
