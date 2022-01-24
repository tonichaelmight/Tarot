const fs = require('fs');

const { MajorArcana, MinorArcana } = require('./Card');

class TarotDeck {
  constructor(deckObject) {
    this._deck = deckObject.deck;
  }

  get deck() {
    return this._deck;
  }

  set deck(newDeck) {
    if (!Array.isArray(newDeck)) {
      throw new Error('deck must be an array');
    } else {
      this._deck = newDeck;
    }
  }



}

/**
 * Vague boilerplate for writing and reading the tarotDeck object
 */
// fs.writeFileSync('deck.json', JSON.stringify(tarotDeck));

const rawTarotDeck = fs.readFileSync('deck.json');
const parsedTarotDeck = JSON.parse(rawTarotDeck);

const tarotDeck = new TarotDeck(parsedTarotDeck);

console.log(tarotDeck);

fs.writeFileSync('deck.json', JSON.stringify(tarotDeck));

// console.log(parsedTarotDeck);

module.exports = { tarotDeck };