const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/js/app.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_module/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
    ],
  },

  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
  ],
};
