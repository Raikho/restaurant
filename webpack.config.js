const path = require ('path');

module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        publicPath: 'dist',
        // path: path.resolve(__dirname, 'dist'),
    },
}