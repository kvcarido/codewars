// Define a card suit
// 8 Kyu
// https://www.codewars.com/kata/5a360620f28b82a711000047/train/javascript
// String ladder

const defineSuit = (card) => {
    let suit = card[card.length - 1]
    switch(suit) {
        case '♣':
            return 'clubs'
        case '♦':
            return 'diamonds'
        case '♥':
            return 'hearts'
        case '♠':
            return 'spades'
        default:
            return 'error'
    }
}


// Tests
console.log(defineSuit("3♣")) // clubs
console.log(defineSuit("3♦")) // diamonds
console.log(defineSuit("3♥")) // hearts
console.log(defineSuit("3♠")) // spades


// Really cool answer
function defineSuit2(card) {
    const s = {
      "♣": "clubs",
      "♠": "spades",
      "♦": "diamonds",
      "♥": "hearts"
    }
    return s[card.charAt(card.length - 1)]
  }