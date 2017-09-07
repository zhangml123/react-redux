var path = require('path')
var webpack = require('webpack')
var HtmlwebpackPlugin = require('html-webpack-plugin')

var root_dir = path.resolve(__dirname);

module.exports = function(env){

  var config =  {
      devtool: 'cheap-module-eval-source-map',
      entry: [
        'webpack-hot-middleware/client',
        './index'
      ],
      output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
      },
      plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlwebpackPlugin({
          title:"react-redux",
          template: './index-template.html', // Load a custom template
          inject: 'body' // Inject all scripts into the body  
        })
      ],
      module: {
        loaders: [
        
          {
            test: /\.jsx$/,
            loaders: 'babel-loader',
            exclude: /node_modules/,
           
          },  {
            test: /\.js$/,
            loaders: [ 'babel-loader' ],
            exclude: /node_modules/,
            include: __dirname
          },
        ],

      }, 
       resolve: {
                modules: [
                    path.resolve(root_dir, "app"),
                    path.resolve(root_dir, "lib"),
                    "node_modules"
                ],
                extensions: [".js", ".jsx", ".coffee", ".json"],
                // fallback: [path.resolve(root_dir, "./node_modules")]
        },
    };
    if(env.prod === true ){
      config.entry = [
        //'webpack-hot-middleware/client',
        './index'
      ]}
    return config;
}

