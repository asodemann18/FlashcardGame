class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }
  
  returnGuess = () => (this.guess);

  returnCard = () => (this.card);
}

module.exports = Turn;
