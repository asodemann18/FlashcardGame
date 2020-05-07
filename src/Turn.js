class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    this.correct = false;
  }

  returnGuess = () => (this.guess);

  returnCard = () => (this.card);

  evaluateGuess = () => {
    if (this.guess === this.card.correctAnswer) {
      this.correct = true;
    }
  }

  giveFeedback = () => {
    if (this.correct === false) {
      return 'incorrect!';
    } else {
      return 'correct!';
    }
  }
}

module.exports = Turn;
