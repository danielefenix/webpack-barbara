var distFolderPath = "dist",
    demoFolderPath = "demo",
    devFolderPath = "dev",
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    packageJson = require("./package.json"),
    Path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: "./src/js/index.js",

    output: getOutput(),

    resolve: {
        root: Path.resolve(__dirname),
        alias: {
            handlebars: Path.join(__dirname, 'node_modules/handlebars/dist/handlebars.js'),
            jquery: Path.join(__dirname, 'node_modules/jquery/dist/jquery')
        }
    },

    module : {
        loaders : [
            { test: /\.css$/, loader: "style!css" }
        ]
    },

    plugins: clearArray([
        new webpack.ProvidePlugin({$: "jquery", jQuery: "jquery"}),
        new HtmlWebpackPlugin({
            inject: "body",
            template: "dev/index.template.html"
        }),
        isProduction(new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            output: {comments: false}
        }))
    ])
};


function getOutput() {

    var output;

    switch (getEnvironment()) {

        case "demo" :
            output = {
                path: Path.join(__dirname, demoFolderPath),
                filename: "index.js"
            };
            break;
        case "production" :
            output = {
                path: Path.join(__dirname, distFolderPath),
                filename: packageJson.name + '.min.js',
                chunkFilename: 'chunk-[id].' + packageJson.name + '.min.js',
                libraryTarget: 'amd'
            };
            break;
        case "develop" :
            output = {
                path: Path.join(__dirname, devFolderPath),
                //publicPath: "/dev/",
                filename: "index.js"
            };
            break;
        default :
            output = {
                path: Path.join(__dirname, distFolderPath),
                filename: "index.js"
            };
            break;
    }

    return output;
}

// utils

function clearArray(array) {

    var result = [];

    array.forEach(function (s) {
        s ? result.push(s) : null;
    });

    return result;

}

function isProduction(valid, invalid) {

    return isEnvironment('production') ? valid : invalid;
}

function isDevelop(valid, invalid) {

    return isEnvironment('develop') ? valid : invalid;
}

function isTest(valid, invalid) {

    return isEnvironment('develop') ? valid : invalid;
}

function isDemo(valid, invalid) {

    return isEnvironment('demo') ? valid : invalid;
}

function isEnvironment(env) {
    return getEnvironment() === env;
}

function getEnvironment() {
    return process.env.NODE_ENV;
}