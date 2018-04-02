const merge = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common.js');

const setPath = function(folderName) {
    return path.join(__dirname, folderName);
};

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: setPath('src/resources'),
        compress: true,
        port: 9000,
        https: true,
        hot: true
    }
});
