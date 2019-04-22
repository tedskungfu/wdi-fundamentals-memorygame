console.log("Up and running!");

var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},
{
rank: "queen",
suit: "diamons",
cardImage: "images/queen-of-diamonds.png",
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];


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
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

//If length of cardsInPlay array equals 2
if (cardsInPlay.length === 2) {


checkForMatch();
}
};

flipCard(0);
flipCard(2);





