const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfigBase = require('./webpack.base.config')
const webpackConfigDev = {
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: ['style-loader', 'css-loader','less-loader' , 'postcss-loader']
            },
        ]
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/',
    },
    plugins: [
        // 定义环境变量为开发环境
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    // module: {
    //   rules: [
    //     {
    //       test: /\.(less|css)$/,
    //       use: ['css-loader', 'style-loader', 'less-loader']
    //     }
    //   ]
    // },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 8014,
        open: true,
        proxy: {
            '/mock': 'http://localhost:8888'
        }
    }
}

module.exports = merge(webpackConfigBase, webpackConfigDev)
