const devConfig = require('../config/webpack.config.dev.js');
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);
  config.resolve = devConfig.resolve;
  return Object.assign(devConfig, config);
};
