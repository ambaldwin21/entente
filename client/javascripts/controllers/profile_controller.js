app.controller('ProfileController', function ($scope, $routeParams, $location, $cookies) {
  var view;
  require([
      // ArcGIS JS
      "esri/views/MapView",
      "esri/WebMap",
      "esri/widgets/Legend",
      "dojo/query",
      "esri/widgets/Search",
      "dojo/domReady!"
  ], function(MapView, WebMap, Legend, query, Search) {

      // Webmap
      var webmap = new WebMap({
          portalItem: {
              id: "d0260a4512d0431b84d628e000b9d25e"
          }
      });

      // View
      var view = new MapView({
          map: webmap,
          container: "profileMap",
          padding: {
              top: 50
          }
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
})
