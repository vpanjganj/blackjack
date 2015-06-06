var controllers = angular.module('controllers', []);


//<editor-fold desc="Controllers">

/*
 * Main controller
 *
 *
 */
app.controller('gameController', ['$scope', '$location', 'player', function ($scope, $location, player) {


    // instantiate a new user
    var user = new player('Vahid');
    // fetch data and publish on scope
    user.reciveCard();



}]);
//</editor-fold>


