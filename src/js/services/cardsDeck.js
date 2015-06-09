/**
 * Created by Vahid on 09/06/15.
 */

/*
 *
 * Cards deck class, Dealer will take ownership of an instance of this class.
 * This class has 2 jobs, hold the cards and provide a shuffle method for the dealer.
 *
 * */
services.factory('cardsDeck', function () {

    //The constructor
    var cardsDeck = function () {


        // Generating unicode based cardDeck starting from &#x1f0a1 to &#x1f0de
        this.cards = [];
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
     * We use it for shuffling the cards.
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
