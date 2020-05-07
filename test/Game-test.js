const chai = require('chai')
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;


describe('Game', function() {
  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should create a card for each element', function() {
    const game = new Game();
    const theStart = game.start();
    expect(theStart[0]).to.deep.equal(prototypeQuestions[0]);
  })

  it('should create a deck of cards', function() {
    const game = new Game();
    const theStart = game.start();
    expect(theStart).to.deep.equal(prototypeQuestions);
  })

  it('should create a new round', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const game = new Game(round);
    const theStart = game.start();
    expect(game.currentRound).to.equal(round);
  })
})
