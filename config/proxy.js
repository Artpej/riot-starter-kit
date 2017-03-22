module.exports = 
    {
      '/api/**': {
        target: 'http://localhost:2375',
        pathRewrite: {'^/api' : ''},
        secure: false
      }
    }
