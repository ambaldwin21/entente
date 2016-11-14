app.controller('MainController', function(esriLoader, $scope, $routeParams, $location, $cookies) {


  // var view;
  // require([
  //     // ArcGIS JS
  //     "esri/views/MapView",
  //     "esri/WebMap",
  //     "esri/widgets/Legend",
  //     "dojo/query",
  //     "esri/widgets/Search",
  //     "dojo/domReady!"
  // ], function(MapView, WebMap, Legend, query, Search) {
  //
  //     // Webmap
  //     var webmap = new WebMap({
  //         portalItem: {
  //             id: "d0260a4512d0431b84d628e000b9d25e"
  //         }
  //     });
  //
  //     // View
  //     var view = new MapView({
  //         map: webmap,
  //         container: "mapViewDiv",
  //         padding: {
  //             top: 50
  //
  //         }
  //     });
  //
  //     // Legend
  //     view.then(function(result) {
  //         var legend = new Legend({
  //             view: view,
  //             layerInfos: [{
  //                 layer: view.map.layers.items[0],
  //                 title: ""
  //             }]
  //         });
  //         view.ui.add(legend, "top-right");
  //         query("#" + legend.id).addClass("collapse in");
  //     });
  //
  //     var searchWidget = new Search({
  //         view: view
  //     })
  //
  //     searchWidget.startup()
  //
  //     view.ui.add(searchWidget, {
  //         position: "top-left",
  //         index: 0
  //     })
  //
  // })

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
      container: "mapViewDiv",
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
})
