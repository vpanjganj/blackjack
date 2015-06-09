
//Using this filter to render unicode based cards in html form



filters.filter('unsafe', ['$sce', function ($sce) {
    return $sce.trustAsHtml;
}]);
