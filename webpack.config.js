var webpack = require('webpack');
var path = require('path');
var ROOT = path.resolve(__dirname);


function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ROOT].concat(args));
}

var CopyWebpackPlugin = (CopyWebpackPlugin = require('copy-webpack-plugin'), CopyWebpackPlugin.default || CopyWebpackPlugin);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

const METADATA = {
  host: 'localhost',
  port: 9001,
  ENV: 'development',
  baseUrl: '/'

};

module.exports = {
  metadata: METADATA,
  devtool: 'source-map',
  debug: true,
  entry: [root('src/main.ts'), "font-awesome-webpack!./node_modules/font-awesome-webpack/font-awesome.config.js"],
  resolve: {
    extensions: ['', '.ts', '.js'],
    root: root('src'),
    modulesDirectories: ['node_modules']
  },
  output: {
    path: root('dist'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.js.map'
  },
  module: {
    preLoaders: [
      {   test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [ root('node_modules/rxjs'), root('node_modules/@angular') ] }
    ],
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: [ /\.(spec|e2e)\.ts$/ ] },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.html$/, loader: 'raw-loader', exclude: [root('src/index.html')] },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }

    ]
  },
  plugins: [

    //Does type checking in a separate process, so webpack don't need to wait.
    new ForkCheckerPlugin(),

    //Varies the distribution of the ids to get the smallest id length for often used ids.
    new webpack.optimize.OccurenceOrderPlugin(true),

    //Copy files and directories in webpack. Copies project static assets.
    new CopyWebpackPlugin([{
      from: root('src/assets'),
      to: root('dist/assets')
    }]),

    //Simplifies creation of HTML files to serve webpack bundles.
    new HtmlWebpackPlugin({
      template: root('src/index.html')
    })
  ],
  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: root('src')
  },
  devServer: {
    port: METADATA.port,
    host: METADATA.host,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    outputPath: root('dist'),
    historyApiFallback: true
  }
};
