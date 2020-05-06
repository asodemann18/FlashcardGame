class Round {
  constructor(theDeck) {
    this.deck = theDeck.cards;
    this.currentCard = this.deck[0];
    this.turns = 0;
  }

  returnCurrentCard = () => {
    this.currentCard = this.deck[this.turns];
    return this.currentCard;
  }

  takeTurn = () => {
    this.turns++;
    this.returnCurrentCard();
  }
}

module.exports = Round;

// takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses

    // When a guess is made, a new Turn instance is created.
    // Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
    // Feedback is returned regarding whether the guess is incorrect or correct



  // The turns count is updated, regardless of whether the guess is correct or incorrect
  // The next card becomes current card
