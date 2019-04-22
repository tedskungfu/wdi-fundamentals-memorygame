console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];


var cardsInPlay = [];

function checkForMatch() {

//if first and second card are equal execute confirmation alert
if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
//if they are not equal execute "try again"
} else {
	console.log("Sorry, try again");
}
};


function flipCard(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

//If length of cardsInPlay array equals 2
if (cardsInPlay.length === 2) {


checkForMatch();
}
};

flipCard(0);
flipCard(2);





