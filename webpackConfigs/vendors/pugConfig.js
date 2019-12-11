const HTMLWebpackPlugin = require('html-webpack-plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');

function config(options = {}) {
  const { workFolder } = options;

  return {
    module: {
      rules: [
        {
          test: /\.(pug|html)/,
          loader: 'pug-loader',
          exclude: /[\\/]node_modules[\\/]/,
        },
      ],
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: `${workFolder}/src/views/index/index.pug`,
        filename: 'index.html',
        inject: false,
        minify: false,
      }),
      new HtmlBeautifyPlugin({
        config: {
          html: {
            indent_with_tabs: true,
            inline: [],
            unformatted: ['p', 'i', 'b', 'span'],
          },
        },
      }),
    ],
  };
}

module.exports = config;
