const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        publicPath: "http://localhost:3004/",
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
            remotes: {
                core: "core-microfrontend@http://localhost:3002/remoteEntry.js",
            },
            exposes: {
                "./EditProfilePopup": "/components/EditProfilePopup",
                "./EditAvatarPopup": "/components/EditAvatarPopup",
            },
            shared: ["react", "react-dom"]
        }),
    ],
};
