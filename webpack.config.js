const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
const {version} = require('./package.json');

module.exports = {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: `Mandelbrot set ${version}`,
            template: 'src/index.html',
            inject: false
        }),
        new WebpackManifestPlugin({
            seed: {
                name: 'Mandelbrot Set',
                version: version,
                developer: {
                    name: 'Lin Fang',
                    url: 'http://www.fanglin.me'
                },
                icons: [{
                    src: 'images/icon.png',
                    sizes: '512x512',
                    type: 'image/png'
                }]
            },
            filter: () => false
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3030,
    },
};
