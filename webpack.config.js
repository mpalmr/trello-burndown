'use strict';
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractText = require('extract-text-webpack-plugin');
const Html = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const PKG = require('./package.json');

const PATH = {
    src: `${__dirname}/src/client`,
    dist: `${__dirname}/dist/client`,
};

const bundles = { style: new ExtractText('trello-burndown.css') };

const BASE_CONFIG = {
    context: PATH.src,
    entry: 'index.ts',
    output: {
        path: PATH.dist,
        filename: 'trello-burndown.js',
    },
    resolve: {
        root: PATH.src,
        extensions: ['', '.js', '.ts'],
    },
    plugins: [
        bundles.style,
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.(t|j)s$/,
                include: PATH.src,
                loader: 'ts-loader',
            },
            {
                test: /\.s?css$/,
                include: PATH.src,
                loader: bundles.style.extract('style', 'css?sourceMap!resolve-url!postcss!sass?sourceMap'),
            },
        ],
    },
    postcss: () => [autoprefixer(PKG.config.supportedBrowsers)],
};

module.exports = merge(BASE_CONFIG, (buildName => {
    switch (buildName) {

        case 'start': return {
            plugins: [
                new webpack.HotModuleReplacementPlugin(),
                new Html({ template: `${PATH.src}/index.html` }),
            ],
            debug: true,
            devtool: 'source-map',
            devServer: {
                port: 8081,
                hot: true,
                inline: true,
                progress: true,
            },
        };

        case 'build': return {};

        default: throw new Error(`Build does not exist: ${buildName}`);
    }
})(process.env.npm_lifecycle_event));