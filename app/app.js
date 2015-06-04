'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('blackjack', ['ui.bootstrap']);


/*
 * Main controller of the end-user landing page with 2 forms
 *
 *
 */
app.controller('GameController', ['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {


    //Initialising formAcordion, It's used for form accordion checking
    $scope.formAcordion = [];



    //Scrolls up to enquiry form in the accordion, it opens it(if closed)
    //And sets it back to enquiry (if it's set on warranty)
    $scope.scrollTo = function (id) {
        $location.hash(id);
        $anchorScroll();
        if (!$scope.formAcordion.open)
            $scope.formAcordion.open = true; //open accordion if it wasn't open

        $scope.formAcordion.warranty = 'false';
    }
}]);









