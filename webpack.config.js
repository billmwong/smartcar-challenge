const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const BUILD_DIR = path.resolve(__dirname, 'public/bundled');
const APP_DIR = path.resolve(__dirname, 'src/');

module.exports = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/bundled',
  },

  node: {
    fs: 'empty',
  },

  module: {
    loaders: [
      // Babel javascript loader, convert jsx or js files to es5 javascript
      {
        test: [/\.js$/, /\.jsx$/],
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-runtime'],
        },
      },
    ],
  },

  resolve: {
    modules: [
      path.join(__dirname, ''),
      'node_modules',
      'client',
    ],
    extensions: ['.js', '.jsx', 'css'],
  },
};
