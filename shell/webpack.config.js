const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: 'development',
    watch: true,
    entry: './src/main.ts',
    module: {
        // Out of the box, webpack only understands JavaScript and JSON files.
        // Loaders allow webpack to process other types of files and convert them
        // into valid modules that can be consumed by your application and added
        // to the dependency graph.
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.json$/,
                type: 'json',
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'auto',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'shellApp',
            remotes: {
                remote: 'remoteApp@http://localhost:3001/remoteEntry.js',
            },
        }),
        new HtmlWebpackPlugin(
            {
                template: './src/index.html',
            }
        ),
    ],
    devServer: {
        port: 3000,
        liveReload: true,
    }
}