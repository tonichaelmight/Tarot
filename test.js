const assert = require('assert');
const fs = require('fs');
const { parsedTarotDeck } = require('./index.js');

const cardProps = ['type', 'reversed', 'uprightMeaning', 'reversedMeaning'];
const majorProps = ['numeral', 'name'];
const minorProps = ['suit', 'rank'];

const logErrorToFile = message => {
  fs.appendFileSync('error.txt', `${message}\n`);
};

fs.writeFileSync('error.txt', '');

// deck should have 78 cards
if (parsedTarotDeck.deck.length !== 78) {
  throw new Error(`Incorrect total number of cards in the deck. There are ${parsedTarotDeck.deck.length}, but there should be 78`);
}

// examine each card
for (const i in parsedTarotDeck.deck) {
  
  const card = parsedTarotDeck.deck[i];

  // checks for the properties all cards should have; throws an error if one is missing
  for (const prop of cardProps) {
    if (!prop in card) {
      throw new Error(`Missing ${prop} property at index ${i}`);
    }
  }

  if (!['major', 'minor'].includes(card.type)) {
    logErrorToFile(`Invalid value for type at index ${i}. Should be a "major" or "minor"`);
  }

  if (typeof card.reversed !== 'boolean') {
    logErrorToFile(`Invalid value for reversed at index ${i}. Should be a boolean`);
  }

  if (!Array.isArray(card.uprightMeaning)) {
    logErrorToFile(`Invalid value for unprightMeaning at index ${i}. Should be an array of strings`);
  } else {
    if (card.uprightMeaning.length < 2) {
      logErrorToFile(`uprightMeaning has ${card.uprightMeaning.length} elements at index ${i}; should have at least 2`);
    }
    for (const meaning of card.uprightMeaning) {
      if (typeof meaning !== 'string') {
        logErrorToFile(`Invalid value in the uprightMeaning array at index ${i}. This array should contain string values`);
      }
    }
  }

  if (!Array.isArray(card.reversedMeaning)) {
    logErrorToFile(`Invalid value for reversedMeaning at index ${i}. Should be an array of strings`);
  } else {
    if (card.reversedMeaning.length < 2) {
      logErrorToFile(`reversedMeaning has ${card.reversedMeaning.length} elements at index ${i}; should have at least 2`);
    }
    for (const meaning of card.reversedMeaning) {
      if (typeof meaning !== 'string') {
        logErrorToFile(`Invalid value in the reversedMeaning array at index ${i}. This array should contain string values`);
      }
    }
  }
  
  if (card.type === 'major') {
    for (const prop of majorProps) {
      if (!prop in card) {
        throw new Error(`Missing ${prop} property at index ${i}`);
      }
    }

    if (typeof card.numeral !== 'string') {
      logErrorToFile(`Invalid value for numeral at index ${i}. Should be a string`);
    }

    if (typeof card.name !== 'string') {
      logErrorToFile(`Invalid value for name at index ${i}. Should be a string`);
    }
  }

  if (card.type === 'minor') {
    for (const prop of minorProps) {
      if (!prop in card) {
        throw new Error(`Missing ${prop} property at index ${i}`);
      }
    }

    if (typeof card.rank !== 'string') {
      logErrorToFile(`Invalid value for rank at index ${i}. Should be a string`);
    }
  
    if (!['Cups', 'Pentacles', 'Swords', 'Wands'].includes(card.suit)) {
      logErrorToFile(`Invalid value for suit at index ${i}. Should be one of the following: ['Cups', 'Pentacles', 'Swords', 'Wands']`);
    }
  }


}


