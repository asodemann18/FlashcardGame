class Round {
  constructor(theDeck) {
    this.deck = theDeck.cards;
    this.currentCard = this.deck[0];
    this.turns = 0;
  }

  returnCurrentCard = () => {
    return this.currentCard;
  }
}

module.exports = Round;


// Your Round class should meet the following requirements:
// returnCurrentCard: method that returns the current card being played
