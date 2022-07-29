const { ReactAModule, ReactBModule } = require('./mf-base-config.js');
const port = require('../../port.js');
const deps = require('../package.json').dependencies;

ReactBModule.url = `//localhost:${port.ReactBPort}`;

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
  name: ReactAModule.name,
  filename: ReactAModule.fileName,
  exposes: {
  },
  remotes: {},
  shared: sharedObj,
}

moduleFederationConfig.remotes[ReactBModule.name] = ReactBModule.federationConfig;

module.exports = moduleFederationConfig;