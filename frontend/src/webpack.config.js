const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    output: {
        publicPath: "http://localhost:3000/",
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "host",
            remotes: {
                auth: "auth-microfrontend@http://localhost:3001/remoteEntry.js",
                profilePhoto: "profile-photo-microfrontend@http://localhost:3002/remoteEntry.js",
                core: "core-microfrontend@http://localhost:3003/remoteEntry.js",
            },
            shared: ["react", "react-dom"]
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
