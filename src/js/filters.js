
var filters = angular.module('filters', []);


filters.filter('unsafe', ['$sce', function ($sce) {
    return $sce.trustAsHtml;
}]);