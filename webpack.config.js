// webpack.config.js
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].js',
        publicPath: 'dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};