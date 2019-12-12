const RemoveServiceOutputsPlugin = require('remove-service-outputs-plugin').default;
const babelConfig = require('./webpackConfigs/vendors/babelConfig');
const lessConfig = require('./webpackConfigs/vendors/lessConfig');
const staticsConfig = require('./webpackConfigs/vendors/staticsConfig');
const devserverConfig = require('./webpackConfigs/vendors/devserverConfig');
const pugConfig = require('./webpackConfigs/vendors/pugConfig');
const merge = require('webpack-merge');

const workFolder = process.cwd();

async function config() {
  const data = merge([
    babelConfig(),
    lessConfig({ path: './static/styles/styles.css' }),
    staticsConfig(),
    await pugConfig({ workFolder }),
    devserverConfig(),
    {
      mode: 'development',
      entry: {
        statics: `${workFolder}/src/statics.js`,
        index: `${workFolder}/src/views/index/index.js`,
      },
      output: {
        path: `${workFolder}/prod/`,
        filename: 'scripts/[name].js',
      },
      plugins: [
        new RemoveServiceOutputsPlugin([
          ['wrunner-default-theme', /.*\.js$/],
        ]),
      ],
      performance: {
        hints: false,
      },
    },
  ]);
  return data;
}

module.exports = config;
