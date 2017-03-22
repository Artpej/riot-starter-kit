if (process.env.NODE_ENV === 'production') {
  module.exports = require('./config/webpack.production.config.js');
} else if (process.env.NODE_ENV === 'testing') {
  module.exports = require('./config/webpack.tests.config.js');
} else {
  module.exports = require('./config/webpack.develpoment.config.js');
}

