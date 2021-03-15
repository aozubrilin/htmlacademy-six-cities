const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    open: false,
    port: 1337,
    historyApiFallback: true,
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
        test: /\.css$/i,
        loader: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
};
