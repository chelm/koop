module.exports = {
  
  'get /github/': {
    controller: 'github',
    action: 'index'
  },

  'get /github/:user': {
    controller: 'github',
    action: 'notFound'
  },

  'get /github/:user/:repo': {
    controller: 'github',
    action: 'notFound'
  },

  'get /github/:user/:repo/:file': {
    controller: 'github',
    action: 'getRepo'
  },

  'get /github/:user/:repo/:file/FeatureServer': {
    controller: 'github',
    action: 'featureservice'
  },

  'get /github/:user/:repo/:file/FeatureServer/:layer': {
    controller: 'github',
    action: 'featureservice'
  },

  'get /github/:user/:repo/:file/FeatureServer/:layer/:method': {
    controller: 'github',
    action: 'featureservice'
  },

  'get /github/:user/:repo/:file/preview' : {
    controller  : 'github',
    action: 'preview'
  }
}
