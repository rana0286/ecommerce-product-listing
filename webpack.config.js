const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './',
    filename: 'scripts/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/assets/index.html',
    }),
    new CopyPlugin([
      {
        from: './src/assets',
        to: 'assets',
      },
    ]),
  ],
  devServer: {
    contentBase: './dist',
    proxy: {
      "/b/5cae9a54fb42337645ebcad3": {
        target: 'https://api.jsonbin.io',
        changeOrigin: true,
        secure: true,
      },
    }
  },
};
