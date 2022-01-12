const path = require('path');
const {
    MiniHtmlWebpackPlugin,
} = require("mini-html-webpack-plugin");
const { WebpackPluginServe } = require("webpack-plugin-serve");


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    // devServer: {
    //     static: './dist',
    // },
    watch: true,
    plugins: [new MiniHtmlWebpackPlugin({ context: { title: 'Hang web 3' } }), new WebpackPluginServe({
        port: process.env.PORT || 8080,
        static: "./dist",
        liveReload: true,
        waitForBuild: true,
    })],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: "hangWeb3",
    },
    module: {
        rules: [
            { test: /\.js$/, use: "babel-loader" },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
};