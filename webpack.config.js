const webpack = require('webpack');
const env = process.env.NODE_ENV;

module.exports = {
  entry: {
    index: './app/components/main.js'
  },
  output: {
    filename: '[name].bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
      loader: 'babel-loader'
    },
    {
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      // maxSize: 200000
    },
    minimize: true
  }
};
