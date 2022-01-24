const fs = require('fs');
// const readline = require('readline');
const prompt = require('prompt-sync')();
const { flipCoin } = require('./helpers');
const { tarotDeck } = require('./TarotDeck.js');

const cardProps = ['type', 'reversed', 'uprightMeaning', 'reversedMeaning'];
const majorProps = ['numeral', 'name'];
const minorProps = ['suit', 'rank'];

let errors = false;

const logErrorToFile = message => {
  fs.appendFileSync('error.txt', `${message}\n`);
  errors = true;
};

fs.writeFileSync('error.txt', '');

// deck should have 78 cards
if (tarotDeck.deck.length !== 78) {
  throw new Error(`Incorrect total number of cards in the deck. There are ${tarotDeck.deck.length}, but there should be 78`);
}

// examine each card for properties
for (const i in tarotDeck.deck) {
  
  const card = tarotDeck.deck[i];

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

let choice = 0;

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const ask = () => {
//   rl.question(
// `\n\n1. Draw Card
// 2. Shuffle Deck
// 3. Reorder Deck

// -1. Exit

// > `,
//     (num) => {
//       choice = num;
  
//       switch (choice) {
//         case '1':
//           tarotDeck.drawCard();
//           ask();
//           break;
//         case '2':
//           // probably change to be like 3-5 times
//           tarotDeck.shuffleDeck();
//           ask();
//           break;
//         case '3':
//           tarotDeck.reorderDeck();
//           ask();
//           break;
//         case '-1':
//           rl.close();
//           break;
//         default: 
//           console.log('Invalid choice\n');
//           ask();
//           break;
//       }
//     }
//   );
// }

const getInput = () => {
  const result = prompt('\n\n1. Draw Card\n2. Shuffle Deck\n3. Reorder Deck\n\n-1. Exit\n\n> ', '-1');
  return result;
}

const processInput = () => {
  switch (choice) {
    case '1':
      tarotDeck.drawCard();
      break;

    case '2':
      // probably change to be like 3-5 times
      let count = 0
      for (let i = 0; i < 7 && count < 5; i++) {
        if (flipCoin()) {
          count++;
          tarotDeck.shuffleDeck();
        }
      }

      while (count < 2) {
        count++;
        tarotDeck.shuffleDeck();
      }

      break;

    case '3':
      tarotDeck.reorderDeck();
      break;

    case '-1':
      console.log("Bye bye!")
      break;

    default: 
      console.log('Invalid choice\n');
      break;
  }
};

while (choice !== '-1') {
  choice = getInput();
  processInput();
}


  

// if (card2.type === 'major') {
//   fs.appendFileSync('stats.txt', `${card2.numeral} ${card2.name} ${card2.reversed ? 'Reversed' : ''}\n`);
// } else {
//   fs.appendFileSync('stats.txt', `${card2.rank} of ${card2.suit}\n`);
// }
// fs.writeFileSync('output.txt', '');
// fs.appendFileSync('output.txt', JSON.stringify(tarotDeck));

// fs.writeFileSync('deck.json', JSON.stringify(tarotDeck));


if (!errors) {
  logErrorToFile('No errors found')
}

logErrorToFile('End of test suite');