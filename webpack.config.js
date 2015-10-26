var sliceArgs = Function.prototype.call.bind(Array.prototype.slice);
var toString  = Function.prototype.call.bind(Object.prototype.toString);
var NODE_ENV  = process.env.NODE_ENV || 'development';
var pkg = require('./package.json');

// Polyfill
Object.assign = require('object-assign');

// Node
var path = require('path');

// NPM
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

// Webpack Plugins
var OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin;
var CommonsChunkPlugin   = webpack.optimize.CommonsChunkPlugin;
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var DedupePlugin   = webpack.optimize.DedupePlugin;
var DefinePlugin   = webpack.DefinePlugin;
var BannerPlugin   = webpack.BannerPlugin;

/*
 * Config
 */
module.exports = {
  devtool: 'source-map',
  debug: true,
  cache: true,

  verbose: true,
  displayErrorDetails: true,
  context: __dirname,
  stats: {
    colors: true,
    reasons: true
  },

  // our Development Server config
  devServer: {
    inline: true,
    colors: true,
    historyApiFallback: true,
    contentBase: 'src/public',
    publicPath: '/__build__'
  },

  //
  entry: {
    'angular2': [
      // Angular 2 Deps
      '@reactivex/rxjs',
      'zone.js',
      'reflect-metadata',

      // to ensure these modules are grouped together in one file
      'angular2/angular2',
      'angular2/core',
      'angular2/router',
      'angular2/http'
    ],
    'app': [
      // App

      './src/app/app'
    ]
  },

  // Config for our build files
  output: {
    path: path.join(__dirname, '/__build__/'),
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__'
  },

  resolve: {
    root: __dirname,
    extensions: ['','.ts','.js','.json'],
    alias: {
      'rx': '@reactivex/rxjs'
    }
  },

  module: {
    loaders: [
      // Support for *.json files.
      { test: /\.json$/,  loader: 'json' },

      // Support for CSS as raw text
      { test: /\.css$/,   loader: 'raw' },

      // support for .html as raw text
      { test: /\.html$/,  loader: 'raw' },

      { test: /\.scss$/, loader: 'style!css!sass' },

      // Support for .ts files.
      { test: /\.ts$/,    loader: 'ts',
        query: {
          'ignoreDiagnostics': [
            // 2300, // 2300 -> Duplicate identifier
            // 2309 // 2309 -> An export assignment cannot be used in a module with other exported elements.
          ]
        },
        exclude: [
          /\.min\.js$/,
          /\.spec\.ts$/,
          /\.e2e\.ts$/,
          /web_modules/,
          /test/,
          /node_modules/
        ]
      }
    ],
    noParse: [
      /rtts_assert\/src\/rtts_assert/,
      /reflect-metadata/
    ]
  },

  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      'VERSION': JSON.stringify(pkg.version)
    }),
    new OccurenceOrderPlugin(),
    new DedupePlugin(),
    new CommonsChunkPlugin({
      name: 'angular2',
      minChunks: Infinity,
      filename: 'angular2.js'
    }),
    new CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js'
    })
  ],

  /*
   * When using `templateUrl` and `styleUrls` please use `__filename`
   * rather than `module.id` for `moduleId` in `@View`
   */
  node: {
    crypto: false,
    __filename: true
  }
};