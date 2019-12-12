const HTMLWebpackPlugin = require('html-webpack-plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');

function getData() {
  return {
    mainData: {
      majorTitle: 'Welcome to our site!',
      minorTitle: 'We are always glad to see you!',
      imageSrc: './static/images/some3.jpg',
    },
    menuData: {
      title: "Blocks",
      groups: [
        {
          title: 'Til Satan ære',
          items: [
            {image: {alt: 'someImage', src: './static/images/some.jpeg'}, href: '#'},
            {image: {alt: 'someImage', src: './static/images/some.jpeg'}, href: '#'},
            {image: {alt: 'someImage', src: './static/images/some.jpeg'}, href: '#'},
          ],
        },
        {
          title: 'Zur Ehre des Satans',
          items: [
            {image: {alt: 'someImage', src: './static/images/some1.jpg'}, size: 'box', href: '#'},
            {image: {alt: 'someImage', src: './static/images/some1.jpg'}, size: 'box', href: '#'},
            {image: {alt: 'someImage', src: './static/images/some1.jpg'}, size: 'box', href: '#'},
          ],
        },
        {
          title: 'Satanas in gloria est scriptor',
          items: [
            {image: {alt: 'someImage', src: './static/images/some2.jpg'}, href: '#'},
            {image: {alt: 'someImage', src: './static/images/some2.jpg'}, href: '#'},
            {image: {alt: 'someImage', src: './static/images/some2.jpg'}, href: '#'},
          ],
        },
      ],
    },
  }
}

function config(options = {}) {
  const { workFolder } = options;

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
        data: getData(),
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
