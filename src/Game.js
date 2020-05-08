const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Game {
  constructor(theRound) {
    this.currentRound = theRound;
    this.cards = [];
  }

  start = () => {
    for (let i = 0; i < prototypeQuestions.length; i++) {
      const card = new Card(prototypeQuestions[i].id, prototypeQuestions[i].question,prototypeQuestions[i].answers, prototypeQuestions[i].correctAnswer);
      this.cards.push(card);
    }
    const deck = new Deck(this.cards);
    let cardDeck = deck.cards;
    const round = new Round(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);
    round.endRound();
    return cardDeck;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
