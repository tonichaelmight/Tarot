const fs = require('fs');
const { flipCoin } = require('./helpers');
const { orderedTarotDeck } = require('./orderedDeck')

const { MajorArcana, MinorArcana } = require('./Card');

class TarotDeck {
  constructor(deckObject) {
    this._deck = []
    this.deck = deckObject._deck;
  }

  get deck() {
    return this._deck;
  }

  set deck(newDeck) {
    if (!Array.isArray(newDeck)) {
      throw new Error('deck must be an array');
    } else if (newDeck.length !== 78) {
      throw new Error('deck must have 78 elements')
    } else {
      this._deck = [];
      for (const card of newDeck) {
        if (card.type === 'major') {
          this._deck.push(new MajorArcana(card.numeral, card.name, card.type, card.reversed, card.uprightMeaning, card.reversedMeaning));
        } else if (card.type === 'minor') {
          this._deck.push(new MinorArcana(card.rank, card.suit, card.type, card.reversed, card.uprightMeaning, card.reversedMeaning));
        } else {
          throw new Error('card with invalid type');
        }
      }
    }
    //console.log(this.deck);
  }

  reorderDeck() {
    console.log('Reordering Deck...');
    //perhaps change to use the .json file instead
    this.deck = orderedTarotDeck._deck;
    this.saveDeck();
  }

  saveDeck() {
    fs.writeFileSync('deck.json', JSON.stringify(this));
    console.log('Deck saved');
  }

  drawCard() {
    const card = this.deck.shift();
    this.deck.push(card);
    this.saveDeck();
    console.log('Here is your card: ');
    console.log(card);
  }

  shuffleDeck() {
    console.log('Shuffling deck...')
    const shuffled = [];

    const midpoint = Math.floor(this.deck.length / 2);

    const half1 = this.deck.slice(0, midpoint);
    const half2 = this.deck.slice(midpoint);


    if (flipCoin() && flipCoin()) {
      half1.forEach(card => card.reverse());
    }

    if (flipCoin()) {
      half2.forEach(card => card.reverse())
    }

    for (let i = 0; i < half1.length; i++) {
      if (flipCoin()) {
        shuffled.push(half1[i], half2[i]);
      } else {
        shuffled.push(half2[i], half1[i]);
      }
    }

    this.deck = shuffled;
    console.log('Shuffled');
    this.saveDeck();
  }

}



const rawTarotDeck = fs.readFileSync('deck.json');
const parsedTarotDeck = JSON.parse(rawTarotDeck);

const tarotDeck = new TarotDeck(parsedTarotDeck);


module.exports = { tarotDeck };