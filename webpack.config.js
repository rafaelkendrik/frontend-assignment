/* eslint-disable */
var webpack = require('webpack');
var path = require('path');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

require('dotenv').config();

function isProduction() {
  return process.env.NODE_ENV === 'production';
}

module.exports = {
  mode: process.env.NODE_ENV,
  watch: !isProduction(),
  watchOptions: {
    aggregateTimeout: 500,
    ignored: ['node_modules']
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve('src')
    },
    extensions: ['.js', '.vue', '.json']
  },
  entry: path.resolve(__dirname, 'src', 'main.js'),
  output: {
    filename: isProduction() ? 'assets/main.[contenthash].js' : 'assets/main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js\vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          fix: false,
          failOnWarning: true
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: function (file) {
          return /node_modules/.test(file) && !/\.vue\.js/.test(file);
        }
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(__dirname, './src/assets/styles/main.scss')
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
          },
          {
            use: ['raw-loader', 'pug-plain-loader']
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: { disableDotRule: true }
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: isProduction() ? 'assets/style.[contenthash].css' : 'assets/style.css'
    }),
    new HtmlWebpackPlugin({
      template: 'index.pug'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        LINKEDIN_CLIENT_ID: JSON.stringify(process.env.LINKEDIN_CLIENT_ID),
        API_URL: JSON.stringify(process.env.API_URL),
        MIXPANEL_KEY: JSON.stringify(process.env.MIXPANEL_KEY),
        WEB_APP_URL: JSON.stringify(process.env.WEB_APP_URL),
      }
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/assets/images',
        to: 'dist/assets/images'
      },
    ])
  ]
};

/* eslint-enable */
