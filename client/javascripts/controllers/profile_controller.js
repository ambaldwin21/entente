app.controller('ProfileController', function($scope, $routeParams, $location, $cookies) {

    $scope.errorMessage = false

    var cookie = $cookies.getObject('loggedin')

    if(!cookie) {
      $scope.errorMessage = true
      $scope.error = "You must be logged in to view this page"
    } else {
      $scope.user = cookie

      var view;
      require([
        // ArcGIS JS
        "esri/views/MapView",
        "esri/Map",
        "esri/widgets/Legend",
        "dojo/query",
        "esri/widgets/Search",
        "dojo/domReady!"
      ], function(MapView, Map, Legend, query, Search) {

        var map = new Map({
          basemap: "streets",
          ground: "world-elevation"
        })

        // View
        var view = new MapView({
          map: map,
          container: "profileMap",
          padding: {
            top: 50
          },
          scale: 50000000,
          center: [-101.17, 21.78]
        });

        // Legend
        view.then(function(result) {
          var legend = new Legend({
            view: view,
            layerInfos: [{
              layer: view.map.layers.items[0],
              title: ""
            }]
          });
          view.ui.add(legend, "top-right");
          query("#" + legend.id).addClass("collapse in");
        });

        var searchWidget = new Search({
          view: view
        })

        searchWidget.startup()

        view.ui.add(searchWidget, {
          position: "top-left",
          index: 0
        })

      })

      $scope.logout = function () {
        $cookies.remove('loggedin')
        $location.url('/')
      }

    }

})
