var services = angular.module('services', []);


services.factory('nameGenerator', function () {

    // Keeping 20 unisex names to suite the avatars
    var nameGenerator = function () {

        this.names = ['Addison', 'Ash', 'Bailey', 'Bobbie', 'Brett', 'Brook',
            'Charlie', 'Daryl', 'Frankie', 'Gray', 'Hayden', 'Morgan', 'Rudy',
            'Taylor', 'Alex', 'West', 'Shannon', 'Ashley', 'Billy', 'Robin'];

    };


    //Giving a new name each time.
    nameGenerator.prototype.generateName = function () {
        var self = this;
        if (self.names.length) {
            var index = Math.floor(Math.random() * self.names.length);
            var item = self.names[index];
            self.names.splice(index, 1);

            return item;

        }
        return 'Dude'
    };


    return nameGenerator;
});


services.factory('cardsDeck', function () {

    //todo put comment
    var cardsDeck = function () {
        this.cards = [];

        // Generating unicode based cardDeck starting from &#x1f0a1 to &#x1f0de

        for (var cardType = 10; cardType < 14; cardType++) {
            for (var cardNumber = 1; cardNumber < 15; cardNumber++) {

                // Skipping Knight Face
                if (cardNumber != 12) {
                    var card = [];
                    card.face = '&#x1f0' + cardType.toString(16) + cardNumber.toString(16);


                    card.value = cardNumber;


                    //10 value for Faces
                    if (cardNumber > 10) {
                        card.value = 10; //
                    }
                    this.cards.push(card);
                }
            }
        }

    };


    /**
     **Fisher-Yates shuffle algorithm.
     */
    cardsDeck.prototype.shuffle = function () {
        var self = this;
        for (var i = self.cards.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = self.cards[i];
            self.cards[i] = self.cards[j];
            self.cards[j] = temp;
        }

    };


    return cardsDeck;
});

services.factory('player', function () {


    //todo put comment
    var player = function (name) {
        this.name = name;
        this.cardsValue = 0;
        this.outofGame = false;
        this.wonGame = false;
        this.cards = [];
    };


    //todo put comment
    player.prototype.reciveCard = function (card) {

        var self = this;


        self.cards.unshift(card);

        //todo put comment


    };

    return player;

});


/*
 *Dealer is dependent on cards deck,
 *Injecting a cardsDeck service into another service (dealer)
 */
services.factory('dealer', ['cardsDeck', function (cardsDeck) {



    //todo put comment
    var dealer = function () {

        this.playerTurn = 0;

        this.wonGame = false;
        this.cards = [];// Dealer's hand
        this.cardsDeck = new cardsDeck(); //The card deck
    };
    var hiddenCard;

    //todo put comment
    dealer.prototype.deal = function (players) {

        var self = this;
        for (var i = 0; i < players.length; i++) {
            players[i].reciveCard(self.cardsDeck.cards.shift()); // Give the first card out
            players[i].reciveCard(self.cardsDeck.cards.shift()); // Give the first card out
        }

        self.receiveCard(self.cardsDeck.cards.shift());
      //  self.receiveCard(self.cardsDeck.cards.shift());
        hiddenCard = self.cardsDeck.cards.shift();
        self.receiveCard({'face' : '&#x1f0a0','value':'0'});
    };

    //todo put comment
    dealer.prototype.receiveCard = function (card) {

        var self = this;


        self.cards.push(card);

        //todo put comment


    };


    //todo put comment
    function becomePlayer(dealer) {
        var self = dealer;
        self.cards[1] = hiddenCard;


    };



    //todo put comment
    dealer.prototype.giveCard = function (player,isLastPerson) {

        var self = this;
        if(player.cardsValue<21) {
            //Removes the first card of an deck,
            //and returns that element. There is no need for
            //random pick as the deck is shuffled.

            if (self.cardsDeck.cards.length == 0) { //if there is no card left
                this.cardsDeck = new cardsDeck(); //A new card deck of course
                this.cardsDeck.shuffle();           //Have a shuffle
            }

            player.reciveCard(self.cardsDeck.cards.shift()); // Give the first card out)


            //sending to Dealer's private method for evaluation
            evaluate(player);

            if (player.outofGame) {
                self.moveOn(isLastPerson)
            }


        }


    };
    //todo put comment
    dealer.prototype.moveOn = function (isLastPerson) {

        var self = this;

        self.playerTurn++;

        if(isLastPerson){
            becomePlayer(self);
        }

    };

    //A private method of Dealer for evaluation, after each players hit
    function evaluate(player) {
        var self = this;
        var total = 0;
        var hasAce = false;
        for (var i = 0; i < player.cards.length; i++) {
            total += player.cards[i].value;
            if(player.cards[i].value == 1){

                hasAce = true;

            }

        }
        player.cardsValue = total;

        if(player.cardsValue+10<=21&&hasAce){
            player.cardsValue+=10;
        }

        if(player.cardsValue >= 21){
            player.outofGame = true;
            if(player.cardsValue == 21){
                player.wonGame = true;
            }


        }


    };
    return dealer;
}]);