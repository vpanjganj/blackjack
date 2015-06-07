var controllers = angular.module('controllers', []);


//<editor-fold desc="Controllers">

/*
 * Main controller
 *
 *
 */
app.controller('gameController', ['$scope', '$location', 'player', 'dealer', 'nameGenerator', function ($scope, $location, player, dealer, nameGenerator) {


    // instantiate new user
    var players = [];

    nameGenerator = new nameGenerator();
    for (var i = 1; i < 5; i++) {
        players.push(new player(nameGenerator.generateName()));

    }


    var cardDealer = new dealer();
    cardDealer.cardsDeck.shuffle();

    $scope.dealer = cardDealer;
    $scope.players = players;


}]);
//</editor-fold>


