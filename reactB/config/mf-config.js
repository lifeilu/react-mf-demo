const { ReactBModule } = require('./mf-base-config.js');
const deps = require('../package.json').dependencies;

const sharedObj = {
  react: {
    eager: true,
    singleton: true,
    requiredVersion: deps['react'],
  },
  'react-dom': {
    singleton: true,
    eager: true,
    requiredVersion: deps['react-dom'],
  },
};

const moduleFederationConfig =  {
  name: ReactBModule.name,
  filename: ReactBModule.fileName,
  exposes: {
    './Button': './src/button',
  },
  remotes: {},
  shared: sharedObj,
}

module.exports = moduleFederationConfig;
