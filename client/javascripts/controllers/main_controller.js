app.controller('MainController', function(esriLoader, $scope, $routeParams, $location, $cookies) {
    var view;
    require([
        "esri/Map",
        "esri/views/SceneView",
        "esri/widgets/Search",
        "dojo/domReady!"
    ], function(Map, SceneView, Search) {

        var map = new Map({
            basemap: "streets"
        })

        view = new SceneView({
            container: "viewDiv",
            map: map,
            center: [-101.17, 21.78],
            scale: 50000000
        })

        var searchWidget = new Search({
              view: view
          })

          searchWidget.startup()

          view.ui.add(searchWidget, {
              position: "top-left",
              index: 0
          })

    })


})
