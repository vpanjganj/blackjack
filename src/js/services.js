
var services = angular.module('services', []);


services.factory('player', function () {


    //todo put comment
    var player = function (name) {
        this.name = name;
        this.outofGame = false;
        this.wonGame = false;
        this.cards = [];
    };


    //todo put comment
    player.prototype.reciveCard = function (card) {

        var self = this;

        //todo put comment
        self.cards.push(card);

        //todo put comment

        if(self.cards.length>5);
        alert('dead');
        if(self.cards.length<=5);
        alert('not dead')

    };
    return player;
})