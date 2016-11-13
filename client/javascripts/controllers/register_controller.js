app.controller('RegisterController', function ($scope, $routeParams, $location, ententeService, $cookies) {

  $scope.submitLogIn = function(returningUser) {
      ententeService.login.save(returningUser, function(loggedinUser) {
        if(!loggedinUser.message) {
          $cookies.putObject('loggedin', loggedinUser)
          $scope.returningUser = {}
          $scope.logIn.$setPristine()
          $location.url('/')
        } else {
          $scope.error = loggedinUser.message
        }
      })
  }


$scope.submitSignUp = function(newUser) {
        ententeService.signup.save(newUser, function(returnedUser) {
          let user = returnedUser[0]
          if (user.length === undefined) {
              $cookies.putObject('signedUp', user)
              $scope.newUser = {}
              $scope.signUp.$setPristine()
              $location.url('/')
          } else if (user.length !== 0) {
            $scope.error = user.message
          }
      })
    }

})
