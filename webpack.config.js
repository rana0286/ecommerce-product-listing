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
    modules: ['node_modules'],
    extensions: ['*', '.js', '.jsx'],
    alias: {
      actions: path.resolve(`${process.cwd()}`, 'src/actions'),
      assets: path.resolve(`${process.cwd()}`, 'src/assets'),
      components: path.resolve(`${process.cwd()}`, 'src/components'),
      constants: path.resolve(`${process.cwd()}`, 'src/constants'),
      pages: path.resolve(`${process.cwd()}`, 'src/pages'),
      reducers: path.resolve(`${process.cwd()}`, 'src/reducers'),
      store: path.resolve(`${process.cwd()}`, 'src/store'),
      utils: path.resolve(`${process.cwd()}`, 'src/utils'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/assets/index.html',
      favicon: './src/assets/icon/favicon.ico',
    }),
    new CopyPlugin([
      {
        from: './src/assets',
        to: 'assets',
      },
      {
        from: './src/assets/icon/favicon.ico',
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
