const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractPlugin = new ExtractTextPlugin({
  filename: 'app.css'
});

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js',
    './assets/app.scss',
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/public/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    extractPlugin,
    new Dotenv()
  ],
  devServer: {
    contentBase: './public',
    hot: true,
    disableHostCheck: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    publicPath: '/',
    historyApiFallback: true,
  }
};
