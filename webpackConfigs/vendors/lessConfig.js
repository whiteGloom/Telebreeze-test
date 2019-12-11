const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function config(options = {}) {
  const { path } = options;

  return {
    module: {
      rules: [
        {
          test: /\.(less|css)/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: { url: false },
            },
            {
              loader: 'less-loader',
            },
          ],
          exclude: /[\\/]node_modules[\\/]/,
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: path,
      }),
    ],
  };
}

module.exports = config;
