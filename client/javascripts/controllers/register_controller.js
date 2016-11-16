app.controller('RegisterController', function($scope, $location, ententeService, $cookies) {

    $scope.submitLogIn = function(returningUser) {
        ententeService.login.save(returningUser, function(loggedinUser) {
            if (!loggedinUser.message) {
                $cookies.putObject('loggedin', loggedinUser)
                $scope.returningUser = {}
                $scope.logIn.$setPristine()
                $location.url('/profile')
            } else {
                $scope.error = loggedinUser.message
            }
        })
    }


    $scope.submitSignUp = function(newUser) {
        ententeService.signup.save(newUser, function(returnedUser) {
            let user = returnedUser[0]
            if (!user.message) {
                $cookies.putObject('loggedin', user)
                $scope.newUser = {}
                $scope.signUp.$setPristine()
                $location.url('/questions')
            } else {
                $scope.error = user.message
            }
        })
    }

})
