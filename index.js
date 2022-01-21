const fs = require('fs');

class Card {
  // reversed - t/f
  // type - major or minor, for deck reconstruction
  // uprightMeaning
  // reversedMeaning
  // interpretation (this is a stretch lol)
  constructor(type, reversed, uprightMeaning, reversedMeaning) {
    this.type = type;
    this.reversed = reversed;
    this.uprightMeaning = uprightMeaning;
    this.reversedMeaning = reversedMeaning;
  }
}

class MajorArcana extends Card {
  // numeral - I - XXII
  // name
}

class MinorArcana extends Card {
  // rank - 1 through King
  // suit - string ['cups', 'pentacles', 'swords', 'wands']
}

const tarotDeck = {
  // deck - array of Card objects; this is probably what will actually get written to file
  deck: [new Card(), new Card(), new Card(), new Card(), new Card()]
}

/**
 * Vague boilerplate for writing and reading the tarotDeck object
 */
fs.writeFileSync('deck.json', JSON.stringify(tarotDeck));

const rawTarotDeck = fs.readFileSync('deck.json');
const parsedTarotDeck = JSON.parse(rawTarotDeck);

console.log(parsedTarotDeck);