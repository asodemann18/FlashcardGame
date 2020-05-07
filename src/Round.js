const Turn = require('../src/Turn');

class Round {
  constructor(theDeck) {
    this.deck = theDeck.cards;
    this.currentCard = this.deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard = () => {
    return this.currentCard = this.deck[this.turns];
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
    let wrongCount = this.incorrectGuesses.length
    return Math.round(((this.turns - wrongCount) / this.turns) * 100)
  }

  endRound = () => {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;
