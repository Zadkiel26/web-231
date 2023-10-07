document.addEventListener('DOMContentLoaded', function() {
    //Create card class
    class Card {
        //Card constructor with two params "face" and "suits"
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }
    }
    //Create dealer class
    class Dealer {
        //Dealer constructor with no params
        constructor() {
            //Create needed variables
            this.CARD_COUNT = 52;
            this.cards = [];
            this.faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
            this.suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

            //Call the getDeckOfCards function
            this.getDeckOfCards();
        }

        //Create getDeckOfCards function
        getDeckOfCards() {
            //Do a for loop until the CARD_COUNT
            for (let count = 0; count < this.CARD_COUNT; count++) {
                //During each loop, get the correct face, suit, and create a new Card object to store in the cards array
                this.cards[count] = new Card(this.faces[count % 13], this.suits[Math.floor(count / 13)]);
            }
        }

        //Create shuffle function
        shuffle() {
            //Do a for loop until the CARD_COUNT
            for(let count = 0; count < this.CARD_COUNT; count++) {
                //Create the second card with a random index
                const secondCard = Math.floor(Math.random() * this.CARD_COUNT);
                //Store the current card in a temp variable
                const tempCard = this.cards[count];
                //Swap the current card with a random chosen card
                this.cards[count] = this.cards[secondCard];
                //Place the temporarily stored card in the random position
                this.cards[secondCard] = tempCard;
            }
        }
    }

    //Create buildPlayerCard function
    function buildPlayerCard(card, suitIcon, faceColor, suitColor) {
        return `
        <div class="player-card">
          <div class="card-title" style="text-align: left; font-size: 20px; padding-left: 20px; color: ${faceColor}">
            ${card.face}
          </div>
          <div class="card-content">
            <span class="${suitIcon}" style="color: ${suitColor}"></span>
          </div>
        </div>
      `;
    }

    //Add event listener to "Deal Cards" button
    document.getElementById('btnDealCards').addEventListener('click', function(){
        
        //Create a dealer object
        const dealer = new Dealer();

        //Call the shuffle function to shuffle the deck of cards
        dealer.shuffle();

        //Create the output string for the cards
        let cardOutputWithIcon = "";

        //Do a for/of loop to iterate through each card in the deck
        for(const card of dealer.cards) {
            //Switch on the card's suit
            switch(card.suit) {
                case "Hearts":
                    //Create the card with heart icon, red face color, red suit color
                    cardOutputWithIcon += buildPlayerCard(card, "mdi mdi-heart", "red", "red");
                    break;
                case "Diamonds":
                    //Create the card with diamond icon, red face color, red suit color
                    cardOutputWithIcon += buildPlayerCard(card, "mdi mdi-diamond", "red", "red");
                    break;
                case "Clubs":
                    //Create the card with club icon, black face color, black suit color
                    cardOutputWithIcon += buildPlayerCard(card, "mdi mdi-cards-club", "black", "black");
                    break;
                case "Spades":
                    //Create the card with spade icon, black face color, black suit color
                    cardOutputWithIcon += buildPlayerCard(card, "mdi mdi-cards-spade", "black", "black");
                    break;
                default:
                    break;
            }
        }
        //Set the innerHTML of the div container with id "player-card-container" to the generated card HTML
        document.getElementById('player-card-container').innerHTML = cardOutputWithIcon;
    });
});