const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: [path.resolve(__dirname, '../src/index.js')],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js',
    library: 'sample-module',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: [
          path.resolve(__dirname, '../src')
        ],
        exclude: /node_modules/,
        use: ['eslint-loader']
      },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, '../src')
        ],
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}
