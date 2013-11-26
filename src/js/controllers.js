/*global angular, LUCENE_ENDPOINT, alert*/
angular.module("GDGAPP").controller("HeaderController", ["$scope", "$location", function gdgHeaderController($scope, $location) {
    'use strict';
    
    $scope.title = "GDG POA Search";
    $scope.goHome = function goHome() {
        $location.path('home');
    };
}]);

angular.module("GDGAPP").controller('HomeController', ['$scope', '$location', function gdgGomeController($scope, $location) {
    'use strict';
    
    $scope.showList = function showList() {
        $location.path('list');
    };
    $scope.showEa = function showEA() {
        $location.path('search');
    };
}]);

angular.module("GDGAPP").controller('SearchController', ['$scope', 'ejsResource', '$location', function gdgSearchController($scope, ejsResource, $location) {
    'use strict';
    
    var ejs = ejsResource(LUCENE_ENDPOINT),
        oQuery = ejs.QueryStringQuery().defaultField('name'),
        client = ejs.Request().indices('smartbadge').types('items');
    
    $scope.total = 0;
    $scope.isFindVisible = false;
    
    $scope.$watch('queryTerm', function watchTerm(val) {
        if ((val !== undefined) && (val !== "")) {
            $scope.search();
        } else {
            $scope.results = [];
        }
    });
    
    $scope.search = function search() {
        client.query(oQuery.query($scope.queryTerm + '*')).doSearch().then(
            function onSuccess(data) {
                $scope.results = data;
            },
            
            function onError() {
                alert('Woops!');
            }
        );
    };
    
    $scope.findResults = function findResults() {
        $location.path('search/' + $scope.queryTerm);
    };
    
    $scope.showDetail = function showDetail(pid) {
        $location.path('detail/' + pid);
    };
    
}]);