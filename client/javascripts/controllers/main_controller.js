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
            var search = new Search({
                map: map
            }, dom.byId ("search"));

            search.startup();

            search.on("select-result", showLocation);

            function showLocation(e) {
                map.graphics.clear();
                var point = e.result.feature.geometry;
                map.infoWindow.setTitle("Search Result");
                map.infoWindow.setContent(e.result.name);
                map.infoWindow.show(e.result.feature.geometry);
            }
          }
        });

    })
});
