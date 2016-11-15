app.controller('MainController', function(esriLoader, $scope, $routeParams, $location, $cookies) {

    var map;
    require([
        "dojo/parser",
        "dojo/ready",
        "esri/map",
        "esri/arcgis/utils",
        "esri/dijit/Search",
        "dojo/dom",
        "esri/geometry/screenUtils",
        "dojo/dom-construct",
        "dojo/query",
        "dojo/domReady!"
    ], function(parser, ready, Map, arcgisUtils, Search, dom, screenUtils, domConstruct, query) {
        ready(function() {
            parser.parse();


            arcgisUtils.createMap("165ae0e0483648e3994c98be7098f7d9", "mapViewDiv").then(function(response) {
                map = response.map
                initializeMap(map)
            });

            function initializeMap (map) {

            console.log('map', map);

            var search = new Search({
                map: map
            }, dom.byId ("search"));

            console.log("MADE IT HERE");
            search.startup();

            map.on("load", enableSpotlight);
            search.on("select-result", showLocation);
            search.on("clear-search", removeSpotlight);

            function showLocation(e) {
                map.graphics.clear();
                var point = e.result.feature.geometry;
                var symbol = new SimpleMarkerSymbol().setStyle(
                    SimpleMarkerSymbol.STYLE_SQUARE).setColor(
                    new Color([255, 0, 0, 0.5])
                );
                var graphic = new Graphic(point, symbol);
                map.graphics.add(graphic);

                map.infoWindow.setTitle("Search Result");
                map.infoWindow.setContent(e.result.name);
                map.infoWindow.show(e.result.feature.geometry);

                var spotlight = map.on("extent-change", function() {
                    var geom = screenUtils.toScreenGeometry(map.extent, map.width, map.height, e.result.extent);
                    var width = geom.xmax - geom.xmin;
                    var height = geom.ymin - geom.ymax;

                    var max = height;
                    if (width > height) {
                        max = width;
                    }

                    var margin = '-' + Math.floor(max / 2) + 'px 0 0 -' + Math.floor(max / 2) + 'px';

                    query(".spotlight").addClass("spotlight-active").style({
                        width: max + "px",
                        height: max + "px",
                        margin: margin
                    });
                    spotlight.remove();
                });
            }

            function enableSpotlight() {
                var html = "<div id='spotlight'' class='spotlight'></div>";
                domConstruct.place(html, dom.byId("map_container"), "first");
            }

            function removeSpotlight() {
                query(".spotlight").removeClass("spotlight-active");
                map.infoWindow.hide();
                map.graphics.clear();
            }
          }
        });

    })
});

//
//     var view;
//     require([
//         // ArcGIS JS
//         "esri/views/MapView",
//         "esri/WebMap",
//         "esri/widgets/Legend",
//         "dojo/query",
//         "esri/widgets/Search",
//         "dojo/domReady!"
//     ], function(MapView, WebMap, Legend, query, Search) {
//
//         // Webmap
//         var webmap = new WebMap({
//             portalItem: {
//                 id: "0d88284ec28549a79d727d37ae76f033"
//             }
//         });
//
//         // View
//         var view = new MapView({
//             map: webmap,
//             container: "mapViewDiv",
//             padding: {
//                 top: 50
//
//             }
//         });
//
//         // Legend
//         view.then(function(result) {
//             var legend = new Legend({
//                 view: view,
//                 layerInfos: [{
//                     layer: view.map.layers.items[0],
//                     title: ""
//                 }]
//             });
//             view.ui.add(legend, "top-right");
//             query("#" + legend.id).addClass("collapse in");
//         });
//
//         var searchWidget = new Search({
//             view: view
//         })
//
//         searchWidget.startup()
//
//         view.ui.add(searchWidget, {
//             position: "top-left",
//             index: 0
//         })
//
//     })
// })

//   var view;
//   require([
//     // ArcGIS JS
//     "esri/views/MapView",
//     "esri/Map",
//     "esri/widgets/Legend",
//     "dojo/query",
//     "esri/widgets/Search",
//     "dojo/domReady!"
//   ], function(MapView, Map, Legend, query, Search) {
//     var map = new Map({
//         basemap: "streets",
//         ground: "world-elevation"
//       })
//       // View
//     var view = new MapView({
//       map: map,
//       container: "mapViewDiv",
//       padding: {
//         top: 50
//       },
//       scale: 50000000,
//       center: [-101.17, 21.78]
//     });
//     // Legend
//     view.then(function(result) {
//       var legend = new Legend({
//         view: view,
//         layerInfos: [{
//           layer: view.map.layers.items[0],
//           title: ""
//         }]
//       });
//       view.ui.add(legend, "top-right");
//       query("#" + legend.id).addClass("collapse in");
//     });
//     var searchWidget = new Search({
//       view: view
//     })
//     searchWidget.startup()
//     view.ui.add(searchWidget, {
//       position: "top-left",
//       index: 0
//     })
//   })
// })
