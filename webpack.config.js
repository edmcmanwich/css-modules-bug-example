var path = require('path');
var webpack = require('webpack');
var cssnano = require('cssnano');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  resolve : {
    extensions : ['', '.js', '.jsx', '.json', '.scss'],
    modulesDirectories: [
      'node_modules',
      'shared'
    ]
  },
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }, {
      test    : /\.scss$/,
      exclude : null,
      loaders : [
        'style',
        'css?sourceMap&-minimize&modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]',
        'postcss',
        'sass?sourceMap'
      ]
    }]
  },
  postcss: [
    cssnano({
      autoprefixer : {
        add      : true,
        remove   : true,
        browsers : ['last 2 versions']
      },
      discardComments : {
        removeAll : true
      },
      discardUnused : false,
      mergeIdents   : false,
      reduceIdents  : false,
      safe          : true,
      sourcemap     : true
    })
  ]
};
