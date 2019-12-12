const fs = require('fs');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');

function getData(resolve, reject) {
  fs.readFile('./src/database.json', (err, data) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(JSON.parse(data));
  });
}

async function config(options = {}) {
  const { workFolder } = options;
  const getDataPromise = new Promise(getData);

  return {
    module: {
      rules: [
        {
          test: /\.(pug|html)/,
          loader: 'pug-loader',
          options: {
            self: true,
          },
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
        data: await getDataPromise,
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
