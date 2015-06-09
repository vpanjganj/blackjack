/**
 * Created by Vahid on 09/06/15.
 */


/*
 *Dealer is dependent on cards deck,
 *A simple dependency injection since the dealer needs the cards deck to begin with.
 *It has a deal method that gives each player and herself 2 cards and hides her own second card
 */
services.factory('dealer', ['cardsDeck', '$timeout','$rootScope','$filter', function (cardsDeck, $timeout,$rootScope,$filter) {



    //New instance of cards deck is available for dealer in construction time
    var dealer = function () {


        this.outOfGame = false;

        this.playerTurn = 0;
        this.cardsValue = 0;
        this.wonGame = false;
        this.cards = [];// Dealer's hand
        this.cardsDeck = new cardsDeck(); //The card deck
    };

    /*
     *
     * dealer hides his second card in this private property
     * which will be shown when all the players have played their turn
     *
     * */
    var hiddenCard;

    //The deal method, receives the list of players to start with
    dealer.prototype.deal = function (players) {

        var self = this;
        self.playerTurn = players.length;//having the count of the players to refer to later
        for (var i = 0; i < self.playerTurn; i++) {

            players[i].receiveCard(self.cardsDeck.cards.shift()); // Give the first card out
            players[i].receiveCard(self.cardsDeck.cards.shift()); // Give the first card out
            evaluate(players[i]);//See if any got 21 straight away
        }

        self.receiveCard(self.cardsDeck.cards.shift());

        hiddenCard = self.cardsDeck.cards.shift(); // keeping the second card private for later

        self.receiveCard({'face': '&#x1f0a0', 'value': '0'});//Temporary showing back of a card instead of the second given card
    };


    //Like any other player the dealer has a receive card method
    dealer.prototype.receiveCard = function (card) {

        var self = this;


        self.cards.push(card);


    };

    /*
     *
     * Auto play functionality for dealer.
     * Every one is done playing and now dealer tries her best
     * to beat every one left in the game (checking outOfGame and cardsValue properties of each player)
     *
     *  */
    dealer.prototype.play=function (players) {


        var self = this;
        self.cards[1] = hiddenCard;//turns Dealer's hidden card




        //Applying The Soft 17 Rule in Blackjack
        while(self.cardsValue<=16 && !self.outOfGame){

            self.giveCard(self);//Dealer gives card to herself


        }

        //Checking the score against whoever is left
        for (var i = 0; i < players.length; i++) {
            if(!players[i].outOfGame){
                if(self.cardsValue>21 || players[i].cardsValue>=self.cardsValue){
                    players[i].wonGame = true;
                }


            }
            players[i].outOfGame = true;
        }

       


    };

    /*
     *  Give card, unlike deal method, needs one individual player.
     *  After each card given dealer then evaluate the situation
     *  evaluate determines whether dealer is lost/won or not by interacting with outOfGame property.
     *  By player being out dealer need to move on to the next person,
     *  move on, can also be called directly when the player refuses to receive any more cards (stand)
     *  Unless when the player announces that he is the last one in the list (isLastPerson)
     *  Then it's dealer's time to play her turn
     *
     * */
    dealer.prototype.giveCard = function (player) {

        var self = this;
        if (player.cardsValue < 21) {

            //Removes the first card of an deck,
            //and returns that element. There is no need for
            //random pick as the deck is shuffled.

            if (self.cardsDeck.cards.length == 0) { //if there is no card left
                this.cardsDeck = new cardsDeck(); //A new card deck of course
                this.cardsDeck.shuffle();           //Have a shuffle
            }

            player.receiveCard(self.cardsDeck.cards.shift()); // Give the first card out)


            //sending to Dealer's private method for evaluation
            evaluate(player);

            if (player.outOfGame) {


                self.moveOn();//Done with this player? move on to the next one



            }


        }


    };
    //Adds up to the turn holder property,

    dealer.prototype.moveOn = function () {

        var self = this;



        // Anyone left?
        if(self.playerTurn>0){

            self.playerTurn--;

            if(self.playerTurn==0){
                $rootScope.$broadcast("roundFinished");// calling for Dealer (in controller) to start playing
            }
        }



    };

    //A private method of Dealer for evaluation, after each players hit
    function evaluate(player) {

        var total = 0;
        var hasAce = false; // looking through the cards, we flag in case there is an Ace
        for (var i = 0; i < player.cards.length; i++) {
            total += player.cards[i].value;
            if (player.cards[i].value == 1) {

                hasAce = true;

            }

        }
        player.cardsValue = total;

        // With ace in place, if possible , we add 10 extra score for once, so the player can benefit
        if (player.cardsValue + 10 <= 21 && hasAce) {
            player.cardsValue += 10;
        }

        if (player.cardsValue >= 21) {
            player.outOfGame = true; // player is out with the wonGame remaining on false
            if (player.cardsValue == 21) {
                player.wonGame = true;
            }


        }


    };
    return dealer;
}]);