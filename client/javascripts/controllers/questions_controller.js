app.controller('QuestionsController', function($scope, $location, $cookies, ententeService) {

    let cookie = $cookies.getObject('loggedin')
    let id = cookie.id

    $scope.submitRating = function(rating) {
        let insertedRating = {
            user_id: cookie.id,
            rating1: rating.one,
            rating2: rating.two,
            rating3: rating.three
        }

        ententeService.questions.save(insertedRating, function(backRating) {
            $location.url(`/profile/${id}`)
        })
    }

})
