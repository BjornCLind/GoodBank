const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        }
      }
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
}