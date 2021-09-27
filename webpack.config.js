const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// location for .env variables - example: sessionId can be placed it for a test build
const dotenv = require("dotenv").config({
    path: path.join(__dirname, "variables.env"),
});

module.exports = (env) => {
    const isProduction = env;
    return {
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "public", "website"),
            filename: "bundle.js",
        },
        plugins: [
            // outputs to separate css file
            new MiniCssExtractPlugin({
                filename: "style.css",
                chunkFilename: "s123.css",
            }),
            // allows minimal node modules to be used in browser (fs, tls, path etc.)
            new NodePolyfillPlugin(),

            //plugin to allow dotenv variables to be used within the browser
            new webpack.DefinePlugin({
                "process.env": JSON.stringify(dotenv.parsed),
            }),
        ],
        module: {
            rules: [
                {
                    loader: "babel-loader",
                    test: /\.js$/,
                    exclude: /node_modules/,
                },
                {
                    use: [
                        MiniCssExtractPlugin.loader,

                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                    test: /\.s?css$/,
                },
            ],
        },
        // if production build runs, dont use source map - only use in dev for debugging 
        devtool: isProduction ? undefined : "source-map",
        
        devServer: {
            publicPath: "/website/",
            contentBase: path.resolve(__dirname, "public"),
            historyApiFallback: true,
        },

        // used so node modules can resolve in the browser
        resolve: {
            fallback: {
                fs: false,
                tls: false,
                net: false,
                path: require.resolve("path-browserify"),
            },
        },
    };
};
