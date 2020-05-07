class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    this.correct = false;
  }

  returnGuess = () => (this.guess);

  returnCard = () => (this.card);

  evaluateGuess = () => {
    this.guess === this.card.correctAnswer ? this.correct = true : this.correct = false;
  }

  giveFeedback = () => {
    return (this.correct === false ? 'incorrect!' : 'correct!');
  }
}

module.exports = Turn;
