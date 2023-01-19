const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        filename: '[name].js',
        // publicPath: 'dist',
        path: path.resolve(__dirname, 'dist'),
        // assetModuleFilename: '[name][ext]',
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
        ],
    },
}