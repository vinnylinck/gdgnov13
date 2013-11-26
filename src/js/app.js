/*global angular*/

var LUCENE_ENDPOINT = "http://localhost:9200";

angular.module("GDGAPP", ['ngRoute', 'elasticjs.service']);

// APP CONFIG TIME
angular.module("GDGAPP").config(["$routeProvider", function gdgAppConfig($routeProvider) {
    'use strict';
    
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'});
    $routeProvider.when('/search', {templateUrl: 'partials/search.html', controller: 'SearchController'});
    $routeProvider.otherwise({redirectTo: '/home'});
}]);

// APP RUNTIME
angular.module("GDGAPP").run(function gdgAppRun() {
    'use strict';
});