console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardOne = cards[0];
var cardTwo = cards[2];

var cardsInPlay = [];



cardsInPlay.push(0);
console.log("User flipped queen");

cardsInPlay.push(2);
console.log("User flipped king");


//If length of cardsInPlay array equals 2
if (cardsInPlay.length === 2) {

//if first and second card are equal execute confirmation alert
} if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
//if they are not equal execute "try again"
} else if (cardsInPlay[0] !== cardsInPlay[1]) {
	alert("Sorry, try again");
}






