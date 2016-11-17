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
      }),
    questions: $resource('questions/:id', {id: '@id'}, {
      'save': {
        method: 'POST',
        isArray: false
      },
      'get': {
        methid: 'GET',
        isArray: true
      }
    })
    }
})

app.factory('socket', function ($rootScope) {
  var socket = io.connect();
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    }
  };
});
