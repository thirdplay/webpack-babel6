const path = require('path')
const webpack = require('webpack')

module.exports = (env, argv) => {
  const IS_DEVELOPMENT = argv.mode === 'development'
  return {
    entry: {
      app: ['./src/main/js/index.js'],
    },
    devtool: IS_DEVELOPMENT ? 'source-map' : 'none',
    output: {
      path: path.join(__dirname, 'public/js'),
      publicPath: '/js/',
      filename: `[name].js`,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {presets: [['env', {modules: false}]]},
          },
        },
      ],
    },
    resolve: {
      alias: {},
    },
    plugins: [
      new webpack.ProvidePlugin({
        _: 'underscore',
        $: 'jquery',
        jQuery: 'jquery',
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      inline: true,
      open: true,
      host: 'localhost',
      port: 8091,
    },
  }
}
