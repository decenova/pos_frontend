const webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname);

const env = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 8088;
const HOST = '0.0.0.0';
const URL = `http://${HOST}:${PORT}`


module.exports = {
  entry: [
    path.resolve(ROOT_PATH, 'src/index')
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader']
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      actions: path.resolve(ROOT_PATH, 'src/actions'),
      utils: path.resolve(ROOT_PATH, 'src/utils'),
      reducers: path.resolve(ROOT_PATH, 'src/reducers'),
      store: path.resolve(ROOT_PATH, 'src/stores'),
      components: path.resolve(ROOT_PATH, 'src/components'),
      containers: path.resolve(ROOT_PATH, 'src/containers'),
      constants: path.resolve(ROOT_PATH, 'src/constants'),
      pages: path.resolve(ROOT_PATH, 'src/pages')
    },
  },
  output: {
    path: process.env.NODE_ENV === 'production' ? path.resolve(ROOT_PATH, 'dist') : path.resolve(ROOT_PATH, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'build'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    host: HOST,
    port: PORT
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new NpmInstallPlugin(),
    new HtmlwebpackPlugin({
      template: 'index.html'
    })
  ]
};
