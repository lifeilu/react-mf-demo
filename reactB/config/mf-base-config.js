const moduleFileName = 'remoteEntry.js';

const ReactAModule = {
  fileName: moduleFileName,
  name: 'ReactA',
  baseUrl: '',
  set url(value) {
    this.baseUrl = value;
  },
  get url() {
    return this.baseUrl;
  },
  get federationConfig() {
    return `${this.name}@${this.url}/${this.fileName}`;
  },
};

const ReactBModule = {
  fileName: moduleFileName,
  name: 'ReactB',
  baseUrl: '',
  set url(value) {
    this.baseUrl = value;
  },
  get url() {
    return this.baseUrl;
  },
  get federationConfig() {
    return `${this.name}@${this.url}/${this.fileName}`;
  },
};

module.exports = {
  ReactAModule,
  ReactBModule,
};
