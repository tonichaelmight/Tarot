const fs = require('fs');

const { MajorArcana, MinorArcana } = require('./Card');

class TarotDeck {
  constructor(deckObject) {
    this.deck = deckObject.deck;
  }
}

/**
 * Vague boilerplate for writing and reading the tarotDeck object
 */
// fs.writeFileSync('deck.json', JSON.stringify(tarotDeck));

const rawTarotDeck = fs.readFileSync('deck.json');
// this variable is exported to use for testing in test.js
const parsedTarotDeck = JSON.parse(rawTarotDeck);

const tarotDeck = new TarotDeck(parsedTarotDeck)

console.log(tarotDeck);

fs.writeFileSync('deck.json', JSON.stringify(tarotDeck));

// console.log(parsedTarotDeck);

module.exports = { parsedTarotDeck };