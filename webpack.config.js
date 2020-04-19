const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode : 'development',
    devtool : 'eval',
    resolve : {
        extensions : ['.jsx', '.js','.tsx', '.ts'],
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 3000,
        hot: true,
        publicPath: '/'
    },
    entry : './src/index.tsx',
    module :{
        rules : [{
            test : /\.tsx$/,
            loader : 'awesome-typescript-loader',
            exclude: path.join(__dirname, 'node_modules'),
        }]
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'public/index.html'
		})
    ]
}