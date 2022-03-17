// create new deck
let fullDeck = [];
const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const face = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

class Card {
    constructor(a, b, c){
        this.suit = a
        this.face = b
        this.value = c 
}
}
for (i = 0; i < suits.length; i++){
    for (j = 0; j< face.length; j++){
         testCard = new Card( suits[i], face[j], j);
         fullDeck.push(testCard);
         
        //console.log  (testCard);
    }
   
}
console.log (fullDeck);
console.log(fullDeck.forEach(i => console.log(i.value)));
