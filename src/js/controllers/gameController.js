//<editor-fold desc="Controllers">

/**
 * Created by Vahid on 09/06/15.
 */
controllers.controller('gameController', ['$scope', 'player', 'dealer', 'nameGenerator', '$modal', '$timeout', function ($scope, player, dealer, nameGenerator, $modal, $timeout) {

    // instantiate new user
    var players = [];
    var numberOfPlayers = 0;

    //Make dealer and her cards deck ready
    var cardDealer = new dealer();
    cardDealer.cardsDeck.shuffle();

    //Ask user to select number of players
    //by instantiating a modal

    var modalStartInstance = $modal.open({
        animation: true,
        templateUrl: 'startModal.html',
        controller: 'modalStartController',
        size: 'sm',
        backdrop: false

    });

    modalStartInstance.result.then(function (selectedItem) {


        numberOfPlayers = selectedItem;//Take then number of players from modal
        nameGenerator = new nameGenerator();// Get ready to name the players

        for (var i = 1; i <= numberOfPlayers; i++) {
            players.push(new player(nameGenerator.generateName())); // add the players and name them

        }
    }, function () {

    });


    $scope.dealer = cardDealer;
    $scope.players = players;

    $scope.$on('roundFinished', function () {
        cardDealer.play(players);

    });


}]);
//</editor-fold>



