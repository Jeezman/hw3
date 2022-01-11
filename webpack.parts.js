const { WebpackPluginServe } = require("webpack-plugin-serve");
const {
    MiniHtmlWebpackPlugin,
} = require("mini-html-webpack-plugin");
const path = require("path");
const APP_SOURCE = path.join(__dirname, "src");

exports.devServer = () => ({
    watch: true,
    plugins: [
        new WebpackPluginServe({
            port: process.env.PORT || 8080,
            static: "./dist",
            liveReload: true,
            waitForBuild: true,
        }),
    ],
});

exports.loadCSS = () => ({
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
        ],
    },
});

exports.loadImages = ({ limit } = {}) => ({
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: "asset",
                parser: { dataUrlCondition: { maxSize: limit } },
            }, { test: /\.svg$/, type: "asset" }
        ],
    },
});

exports.loadJavaScript = () => ({
    module: {
        rules: [
            // Consider extracting include as a parameter
            { test: /\.js$/, include: APP_SOURCE, use: "babel-loader" },
        ],
    },
});

exports.generateSourceMaps = ({ type }) => ({ devtool: type });

exports.page = ({ title }) => ({
    plugins: [new MiniHtmlWebpackPlugin({ context: { title } })],
});

exports.clean = () => ({
    output: {
        clean: true,
    },
});