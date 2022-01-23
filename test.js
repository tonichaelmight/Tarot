const assert = require('assert');
const { parsedTarotDeck } = require('./index.js');

const cardProps = ['type', 'reversed', 'uprightMeaning', 'reversedMeaning'];
const majorProps = ['numeral', 'name'];
const minorProps = ['suit', 'rank'];

for (const i in parsedTarotDeck.deck) {
  
  const card = parsedTarotDeck.deck[i];

  for (const prop of cardProps) {
    if (!prop in card) {
      throw new Error(`Missing ${prop} property at index ${i}`)
    }
  }

  // maybe have this write to a file instead of throwing errors to the console

  if (!Array.isArray(card.uprightMeaning)) {
    throw new Error(`Invalid value for unprightMeaning at index ${i}`);
  }

  if (!Array.isArray(card.reversedMeaning)) {
    throw new Error(`Invalid value for reversedMeaning at index ${i}`);
  }
  
  if (card.type === 'major') {
    for (const prop of majorProps) {
      if (!prop in card) {
        throw new Error(`Missing ${prop} property at index ${i}`)
      }
    }
  }



}