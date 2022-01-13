const { mode } = require('webpack-nano/argv');
const { merge } = require('webpack-merge')
const parts = require("./__webpack.parts")

const commonConfig = merge([
    { entry: ["./src"] },
    parts.page({ title: "Demo" }),
    parts.loadCSS(),
    parts.loadImages({ limit: 15000 }),
    parts.loadJavaScript(),
    parts.clean(),
]);

const productionConfig = merge([
    parts.generateSourceMaps({ type: 'source-map' }),
    { optimization: { splitChunks: { chunks: "all" } } },
]);

const developmentConfig = merge([
    { entry: ["webpack-plugin-serve/client"] },
    parts.devServer(),
]);

const getConfig = (mode) => {
    switch (mode) {
        case "production":
            return merge(commonConfig, productionConfig, { mode });
        case "development":
            return merge(commonConfig, developmentConfig, { mode });
        default:
            throw new Error(`Trying to use an unknown mode, ${mode}`);
    }
};

module.exports = getConfig(mode);