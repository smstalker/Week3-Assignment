//let hand1 = [10, 3, 4, 5];
//let hand2 = [3, 8, 6, 5];

const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const face = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
let fullDeck = [];
let p1score = 0
let p2score = 0
let hand1 = []
let hand2 = []


// create new deck
class Card {
    constructor(a, b, c){
        this.suit = a
        this.face = b
        this.value = c 
}
}
suits.forEach(suit => 
    face.forEach((face, index) => {
        fullDeck.push(new Card(suit, face, index++));
    }
));
// for (i = 0, i; i < suits.length; i++){
//     for (j = 0; j< face.length; j++){
//          testCard = new Card( suits[i], face[j], j+1);
//          fullDeck.push(testCard);
         
//         //console.log  (testCard);
//     }
   
//
console.log (fullDeck);
// shuffled and dealt deck in one step
for (i = 0; i<26; i++ ){
    let randomNum = Math.floor(Math.random()*51);
    //let tempCard = fullDeck[randomNum]
    hand1.push(fullDeck[randomNum]);
    let randomNum2 = Math.floor(Math.random()*51);
    hand2.push(fullDeck[randomNum2]);
}


//use slice to split the deck into 2 hands
//  hand1 = fullDeck.slice(0, 26);
//  hand2 = fullDeck.slice(26);
console.log (hand1);
console.log (hand2); 



// var testCard = new Card ( suits[0], face[0], 3);
// console.log (testCard);

// for loop with if else if statement to compare cards and award points. 
for (i = 0; i < hand1.length; i++) {

if (hand1[i].value > hand2[i].value){
    // console.log (hand1[i].value);
    p1score += 1
    console.log (`Player 1 wins and has ${p1score} points`);
} else if (hand1[i].value < hand2[i].value) { 
    p2score +=1
    console.log (`Player 2 wins and has ${p2score} points`);
} else  {
    console.log (`Tie Player 1 has ${p1score} points Player 2 has ${p2score} points`);
}
}
