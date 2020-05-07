const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Game {
  constructor() {
  //  this.currentRound = theRound;
  }

  start = () => {
    let cards = []
    for (let i = 0; i < prototypeQuestions.length; i++) {
      const card = new Card(prototypeQuestions[i].id, prototypeQuestions[i].question,prototypeQuestions[i].answers, prototypeQuestions[i].correctAnswer )
      cards.push(card);
    }
    const deck = new Deck(cards);
    let cardDeck = deck.cards;
    return cardDeck;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}
module.exports = Game;


//Should keep track of the currentRound
