const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // The publicPath configuration option can be quite useful in a variety of scenarios.
        // It allows you to specify the base path for all the assets within your application.
        publicPath: 'auto',
        // In general it's good practice to clean the /dist folder before each build,
        // so that only used files will be generated. Let's take care of that with output.clean option.
        clean: true
    },
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