const Turn = require('../src/Turn');

class Round {
  constructor(theDeck) {
    this.deck = theDeck.cards;
    this.currentCard = this.deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard = () => {
    this.currentCard = this.deck[this.turns];
    return this.currentCard;
  }

  takeTurn = (guess) => {
    let theTurn = new Turn(guess, this.currentCard);
    this.turns++;
    this.returnCurrentCard();
    theTurn.evaluateGuess();
    if (theTurn.correct === false) {
      this.incorrectGuesses.push(theTurn.card.id);
    }
    return theTurn.giveFeedback();
  }

  calculatePercentCorrect = () => {

  }
}

module.exports = Round;

// calculatePercentCorrect: method that calculates and returns the percentage of correct guesses
