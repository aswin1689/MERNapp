const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV;

const setPath = function(folderName) {
    return path.join(__dirname, folderName);
};

const isProd = function() {
    return process.env.NODE_ENV === 'production' ? true : false;
};

const buildingForLocal = () => {
    return NODE_ENV === 'development';
};

module.exports = {
    mode: buildingForLocal() ? 'development' : 'production',
    entry: {
        app: setPath('src/client/index.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: setPath('public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devServer: {
        contentBase: './public',
        compress: true,
        port: 9000,
        https: true
    }
};
