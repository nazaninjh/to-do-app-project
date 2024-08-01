const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [

        new HtmlWebpackPlugin({
    
          title: 'Home',
    
        }),
    
    ],
    module: {

        rules: [
    
          {
    
            test: /\.css$/i,
    
            use: ['style-loader', 'css-loader'],
    
          },
    
        ],
    
      },
    devtool: 'inline-source-map',
    output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    },
}