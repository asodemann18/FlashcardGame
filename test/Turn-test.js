const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    turn.returnGuess();
    expect(turn.returnGuess()).to.equal('array');
  })

  it('should return the entire card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    turn.returnCard();
    expect(turn.returnCard()).to.deep.equal({
      id: 1,
      question: 'What allows you to define a set of related information using key-value pairs?',
      answers: [ 'object', 'array', 'function' ],
      correctAnswer: 'object'
    });
  })

  it('Turn.correct should be true when an answer is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    turn.evaluateGuess();
    expect(turn.correct).to.equal(true);
  })

  it('"correct!" should be returned when an answer is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    turn.evaluateGuess();
    turn.giveFeedback();
    expect(turn.giveFeedback()).to.equal('incorrect!')
  })
});
