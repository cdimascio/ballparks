var webpack = require('webpack');
var path = require('path');
var devConfig = {
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
    path: path.join(__dirname, 'client/dist'),
    path: __dirname,
    publicPath: 'http://localhost:3000/',
    filename: './client/dist/bundle.js'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
      test: /\.js?/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client/src')
    },
    {
      test: /\.json$/,
      loader: "json-loader"
    },
    {
      test: /\.scss?/,
      loaders: ['style', 'css', 'sass']
    },
    {
      test: /\.css$/,
      loaders: ['style', 'css' ]
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader?name=[path][name].[ext]',
      //exclude: [/fontawesome.*$/i]
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  }
};


if (process.env.NODE_ENV === 'production') {

  devConfig.entry = [
    './client/src/index'
  ];

  devConfig.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ];
  delete devConfig.devtool;
}
module.exports = devConfig;