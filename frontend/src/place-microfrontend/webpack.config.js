const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        publicPath: "http://localhost:3003/",
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
            name: "core-microfrontend",
            filename: "remoteEntry.js",
            exposes: {
                "./Card": "/components/Card",
                "./AddPlacePopup": "/components/AddPlacePopup"
            },
            shared: ["react", "react-dom"]
        }),
    ],
};
