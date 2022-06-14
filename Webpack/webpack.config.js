const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
];

/** @type {import('webpack').Configuration} */
const config = {
  entry: './src/js/index.js',
  output: {
    clean: true,
    filename: 'bundle.js'
  },
  devtool: false,
  plugins,
};

module.exports = config;
