'use strict'

app.controller('ProfileController', function($scope, $routeParams, $location, $cookies, ententeService) {

    $scope.errorMessage = false

    var cookie = $cookies.getObject('loggedin')

    if (!cookie) {
        $scope.errorMessage = true
        $scope.error = "You must be logged in to view this page"
    } else {
        $scope.user = cookie

        $scope.ratings = ententeService.questions.get({
            id: $routeParams.id
        }, function(returnedRatings) {
            $scope.ratings.marriage = Number.parseInt(returnedRatings[0].rating)
            $scope.ratings.immigration = Number.parseInt(returnedRatings[1].rating)
            $scope.ratings.climate = Number.parseInt(returnedRatings[2].rating)
        })

        var map;
        require([
            "esri/map",
            "esri/dijit/Search",
            "dojo/dom",
            "esri/geometry/screenUtils",
            "dojo/dom-construct",
            "dojo/query",
            "esri/toolbars/draw",
            "esri/toolbars/edit",
            "esri/graphic",
            "esri/config",

            "esri/layers/FeatureLayer",
            "esri/symbols/SimpleMarkerSymbol",

            "esri/dijit/editing/TemplatePicker",

            "dojo/_base/array",
            "dojo/_base/event",
            "dojo/_base/lang",
            "dojo/parser",
            "dijit/registry",

            "esri/dijit/Legend",
            "dijit/form/CheckBox",

            "dijit/layout/BorderContainer", "dijit/layout/ContentPane",
            "dijit/form/Button", "dojo/domReady!"

        ], function(Map, Search, dom, screenUtils, domConstruct, query, Draw, Edit, Graphic, esriConfig, FeatureLayer, SimpleMarkerSymbol, TemplatePicker, arrayUtils, event, lang, parser, registry, Legend, CheckBox) {

            parser.parse();
            esriConfig.defaults.io.proxyUrl = "/proxy/";

            var legendLayers = [];

            map = new Map("profileMap", {
                basemap: "streets",
                center: [-80, 40],
                zoom: 4
            });

            var climateLayer = new FeatureLayer("https://services7.arcgis.com/3nSqG09xIkKLmBqg/arcgis/rest/services/ClimateLayer/FeatureServer/0", {
                id: 'climate'
            });

            legendLayers.push({
                layer: climateLayer,
                title: 'Climate Change'
            });

            var marriageLayer = new FeatureLayer("https://services7.arcgis.com/3nSqG09xIkKLmBqg/arcgis/rest/services/MarriageLayer/FeatureServer/0", {
                id: 'marriage'
            });

            legendLayers.push({
                layer: marriageLayer,
                title: 'Marriage Equality'
            });

            var immigrationLayer = new FeatureLayer("https://services7.arcgis.com/3nSqG09xIkKLmBqg/arcgis/rest/services/ImmigrationLayer/FeatureServer/0", {
                id: 'immigration'
            });

            map.on('layers-add-result', function() {
                var legend = new Legend({
                    map: map,
                    layerInfos: legendLayers
                }, "legendDiv");
                legend.startup();
            });

            legendLayers.push({
                layer: immigrationLayer,
                title: 'Immigration Rights'
            });

            map.addLayers([climateLayer, marriageLayer, immigrationLayer]);

            map.on('layers-add-result', function() {
                arrayUtils.forEach(legendLayers, function(layer) {
                    var layerName = layer.title;
                    var checkBox = new CheckBox({
                        name: "checkBox" + layer.layer.id,
                        value: layer.layer.id,
                        checked: layer.layer.visible
                    })
                    domConstruct.place(checkBox.domNode, dom.byId("toggle"), "after");
                    var checkLabel = domConstruct.create('label', {
                        'for': checkBox.name,
                        innerHTML: layerName
                    }, checkBox.domNode, "after");
                    domConstruct.place("<br />", checkLabel, "after");
                    checkBox.on("change", function() {
                        var targetLayer = map.getLayer(this.value);
                        targetLayer.setVisibility(!targetLayer.visible);
                        this.checked = targetLayer.visible;
                    });

                });
            });

            var search = new Search({
                map: map
            }, dom.byId("profileSearch"));

            search.startup();

            search.on("select-result", showLocation);

            function showLocation(e) {
                map.graphics.clear();
                var point = e.result.feature.geometry;
                map.infoWindow.setTitle("Search Result");
                map.infoWindow.setContent(e.result.name);
                map.infoWindow.show(e.result.feature.geometry);
            }

        });

        $scope.logout = function() {
            $cookies.remove('loggedin')
            $location.url('/')
        }
    }

})
