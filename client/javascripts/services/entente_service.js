app.service('ententeService', function ($resource) {
  return {
    login: $resource('register/:id', {id: '@id'}, {
      'save': {
        method: 'POST',
        isArray: false
      }
    }),
    signup: $resource('signup/:id', {id: '@id'}, {
        'save':  {
          method:'POST',
          isArray: true
        }
      })
    }
})
