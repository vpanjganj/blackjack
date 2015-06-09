/**
 * Created by Vahid on 09/06/15.
 */


/*
 * Player class, apart from having name, cards and game status
 * it also has a receive card method, a simple setter that dealer talks to
 * cards value keeps the total value of the player's cards.
 * It makes the dealer job easier to assess each players total numbers quicker.
 *
 * */
services.factory('player', ['$timeout', function ($timeout) {


    //todo put comment
    var player = function (name) {
        this.name = name;
        this.cardsValue = 0;
        this.outOfGame = false;
        this.wonGame = false;
        this.cards = [];
    };


    //basically a setter for player's cards
    player.prototype.receiveCard = function (card) {

        var self = this;


        self.cards.push(card);


    };

    return player;

}]);

