const webpack = require('webpack');
const path = require('path');
//const CleanWebpackPlugin = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

const setPath = function(folderName) {
    return path.join(__dirname, folderName);
};

const isProd = function() {
    return NODE_ENV === 'production' ? true : false;
};

const buildingForLocal = () => {
    return NODE_ENV === 'development';
};

module.exports = {
    mode: buildingForLocal() ? 'development' : 'production',
    entry: {
        app: setPath('src/client/index.js')
    },
    plugins: [
        //new CleanWebpackPlugin(['src/client/public']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: setPath('src/client/public')
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
    performance: {
        hints: isProd() ? 'warnings' : false
    }
};
