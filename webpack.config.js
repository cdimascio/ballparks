var webpack = require('webpack');
var path = require('path');
module.exports = {
  context: __dirname,
  entry: [
    // Add the client which connects to our middleware
    // You can use full urls like 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
    // useful if you run your app from another point like django
    //'webpack-hot-middleware/client',//?path=/__webpack_hmr&timeout=20000',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    // And then the actual application
    './client/src/index'
  ],
  output: {
    //path: path.join(__dirname, 'client/dist'),
    path: __dirname,
    publicPath: '/',
    filename: './client/dist/bundle.js'
  },
  devtool: '#source-map',
  module: {
    loaders: [{
      test: /\.js?/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client/src')
    },
    {
      test: /\.scss?/,
      loaders: ['style', 'css', 'sass']
    },
    {
      test: /\.css$/,
      loaders: ['style', 'css' ]
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  }
};
