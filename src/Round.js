class Round {
  constructor(theDeck) {
    this.deck = theDeck.cards;
    this.currentCard = this.deck[0];
  }
}

module.exports = Round;


// Your Round class should meet the following requirements:
// returnCurrentCard: method that returns the current card being played
