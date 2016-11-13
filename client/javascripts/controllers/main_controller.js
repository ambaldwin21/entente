app.controller('MainController', function(esriLoader, $scope, $routeParams, $location, $cookies) {
    var view;
    require([
        "esri/Map",
        "esri/views/SceneView",
        "dojo/domReady!"
    ], function(Map, SceneView) {

        var map = new Map({
            basemap: "streets"
        })

        view = new SceneView({
            container: "viewDiv",
            map: map,
            center: [-101.17, 21.78],
            scale: 50000000
        })

    })


})
