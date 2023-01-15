const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        filename: '[name].js',
        // publicPath: 'dist',
        path: path.resolve(__dirname, 'dist'),
    },
}