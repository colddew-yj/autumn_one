const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpackConfigBase = require('./webpack.base.config')
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const webpackConfigProd = {
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true,
                                camelCase: true
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                minimize: true,
                                camelCase: true
                            }
                        },
                        'postcss-loader'
                    ]
                })
            },]
    },
    output: {
        sourceMapFilename: '[name].[chunkhash:5].map',
        filename: "[name].[chunkhash:5].js",
        chunkFilename: '[name].[chunkhash:5].js',
        path: path.resolve(__dirname, 'dist')
    },
    // module: {
    //    rules: [
    //
    //    ]
    // },
    plugins: [
        // 定义环境变量为开发环境
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.HashedModuleIdsPlugin(),
        new ExtractTextPlugin("[name].[hash:5].css"),
        // 提取css
        // 根据入口文件，提取重复引用的公共代码类库，打包到单独文件中
        /* 压缩优化代码开始 */
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin("[name].[hash:5].css"),
        // 分析代码
        // new BundleAnalyzerPlugin({analyzerPort: 3011}),
        // new Copy([
        //   {
        //     from: './app/images',
        //     to: './images'
        //   }, {
        //     from: './app/iconfont',
        //     to: './iconfont'
        //   }
        // ])
    ]
}

module.exports = merge(webpackConfigBase, webpackConfigProd)
