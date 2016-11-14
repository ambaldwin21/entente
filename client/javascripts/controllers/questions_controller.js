app.controller('QuestionsController', function ($scope, $routeParams, $location, $cookies) {


  $scope.submitRating = function(rating) {
    console.log('rating in controller', rating);
  //     redditService.login(returningUser).then(function(loggedinUser) {
  //         $scope.returningUser = {}
  //         $scope.logIn.$setPristine()
  //         $location.url('/')
  //     }).catch(function(error) {
  //         $scope.error = 'Bad email or password! Please try again.'
  //     })
  }

})
