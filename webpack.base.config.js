const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpackConfigBase = {
  entry: {
    app: path.join(__dirname, 'src/app.jsx'),
    vendor: ['react', 'react-dom','redux','react-router-dom']
  },
  resolve: {
    extensions: [
      '.js', '.json', '.jsx', '.less'
    ],
    alias: {
      Components: path.resolve(__dirname, 'src/components'),
      Content: path.resolve(__dirname, 'src/components/content'),
      Redux: path.resolve(__dirname, 'src/redux'),
      Common: path.resolve(__dirname, 'src/common'),
      Styles: path.resolve(__dirname, 'src/styles')
    }
  },
  plugins: [
    // 将打包后的资源注入到html文件内
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}),
    new webpack.optimize.CommonsChunkPlugin({name: 'manifest.js'}),
    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     postcss: function() {
    //       return [
    //         require('postcss-import')(),
    //         require('autoprefixer')({
    //           browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8']
    //         }),
    //         require('postcss-px2rem')({remUnit: 100})
    //       ];
    //     }
    //   }
    // })
  ],
  module: {
    rules: [
     {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'img/[name].[hash:4].[ext]'
          }
        }
      }, {
        test: /\.(woff|eot|ttf|svg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'font/[name].[hash:4].[ext]'
          }
        }
      }, {
        test: /\.(htm|html)$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
              attrs: ['img:src', 'link:href']
            }
          }
        ]
      }
    ]
  }
}

module.exports = webpackConfigBase
