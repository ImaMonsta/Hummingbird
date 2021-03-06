var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    main: [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      './src/main.js'
    ]       
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public'),
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    , new webpack.NoErrorsPlugin()
    //, new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  module: {
    loaders: [
        {
            test: /\.jsx?$/,
            include: path.join(__dirname, 'src'),
            loader: 'react-hot!babel'
          
        },
        {
            test: /\.scss$/,
            include: path.join(__dirname, 'src'),
            loader: 'style!css!sass'
        },
        { 
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
            include: path.join(__dirname, 'src'),
            loader: "file-loader" 
            
        }
    ]
  }
}
