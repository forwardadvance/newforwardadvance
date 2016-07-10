var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development',
    viewsPath = rootPath + '/views';


var config = {
  development: {
    root: rootPath,
    viewsPath: viewsPath,
    app: {
      name: 'forwardadvance'
    },
    port: 3000,
    mongoUrl: 'mongodb://localhost:27017/test',
    sessionSecret: 'dummy_secret',
    prettyHtml: true
  },

  production: {
    root: rootPath,
    viewsPath: viewsPath,
    app: {
      name: 'forwardadvance'
    },
    port: process.env.PORT || 5000,
    mongoUrl: process.env.MONGOLAB_URI,
    sessionSecret: process.env.SESSION_SECRET,
    prettyHtml: false
  }
};

module.exports = config[env];
