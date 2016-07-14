var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var cssnano = require('cssnano');
var path = require('path');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    root: path.resolve(__dirname, 'src'),
    extensions: ['', '.js'],
  },

  module: {
    loaders: [
      { test: /\.json$/, loader: 'json' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'postcss-loader',
          'sass',
        ],
      },
    ],
  },
  postcss: [
    cssnano({
      sourcemap: true,
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['last 2 versions'],
      },
      discardComments: {
        removeAll: true,
      },
    }),
  ],
  sassLoader: {
    includePaths: [path.resolve(__dirname, 'src/styles')],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.tmpl.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true,
  },
};
