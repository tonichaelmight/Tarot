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
  constructor(numeral, name, type, reversed, uprightMeaning, reversedMeaning){
    super(type, reversed, uprightMeaning, reversedMeaning);
    this.numeral = numeral;
    this.name = name;
  }
}

class MinorArcana extends Card {
  // rank - 1 through King
  // suit - string ['cups', 'pentacles', 'swords', 'wands']
  constructor(rank, suit, type, reversed, uprightMeaning, reversedMeaning){
    super(type, reversed, uprightMeaning, reversedMeaning);
    this.rank = rank;
    this.suit = suit;
  }
}

const tarotDeck = {
  // deck - array of Card objects; this is probably what will actually get written to file
  deck: [
    // MAJOR ARCANA
    new MajorArcana('O', 'The Fool', 'major', false, ['innocence', 'new beginnings', 'free spirit'], ['recklessness', 'taken advantage of', 'inconsideration']), 

    new MajorArcana('I', 'The Magician', 'major', false, ['willpower', 'desire', 'creation', 'manifestation'], ['trickery', 'illusions', 'out of touch']), 

    new MajorArcana('II', 'The High Priestess', 'major', false, ['intuitive', 'unconscious', 'inner voice'], ['lack of center', 'lost inner voice', 'repressed feelings']),

    new MajorArcana('III', 'The Empress', 'major', false, ['motherhood', 'fertility', 'nature'], ['dependence', 'smothering', 'emptiness', 'nosiness']),

    new MajorArcana('IV', 'The Emperor', 'major', false, ['authority', 'structure', 'control', 'fatherhood'], ['tyranny', 'rigidity', 'coldness']),

    new MajorArcana('V', 'The Hierophant', 'major', false, ['tradition', 'conformity', 'morality', 'ethics'], ['rebellion', 'subversiveness', 'new approaches']),

    new MajorArcana('VI', 'The Lovers', 'major', false, ['partnerships', 'duality', 'union'], ['loss of balance', 'one-sidedness', 'disharmony']),

    new MajorArcana('VII', 'The Chariot', 'major', false, ['direction', 'control', 'willpower'], ['lack of control', 'lack of direction', 'aggression']),

    new MajorArcana('VIII', 'Strength', 'major', false, ['inner strength', 'bravery', 'compassion', 'focus'], ['self doubt', 'weakness', 'insecurity']),

    new MajorArcana('IX', 'The Hermit', 'major', false, ['contemplation', 'search for truth', 'inner guidance'], ['loneliness', 'isolation', 'lost your way']),

    new MajorArcana('X', 'The Wheel of Fortune', 'major', false, ['change', 'cycles', 'inevitable fate'], ['no control', 'clinging to control', 'bad luck']),

    new MajorArcana('XI', 'Justice', 'major', false, ['cause and effect', 'clarity', 'truth'], ['dishonesty', 'unaccountability', 'unfairness']),

    new MajorArcana('XII', 'The Hanged Man', 'major', false, ['sacrifice', 'release', 'martyrdom'], ['stalling', 'needless sacrifice', 'fear of sacrifice']),

    new MajorArcana('XIII', 'Death', 'major', false, ['end of cycle', 'beginnings', 'change', 'metamorphosis'], ['fear of change', 'holding on', 'stagnation', 'decay']),

    new MajorArcana('XIV', 'Temperance', 'major', false, ['middle path', 'patience', 'finding meaning'], ['extremes', 'excess', 'lack of balance']),

    new MajorArcana('XV', 'The Devil', 'major', false, ['addiction', 'materialism', 'playfulness'], ['freedom', 'release', 'restoring control']),

    new MajorArcana('XVI', 'The Tower', 'major', false, ['sudden upheaval', 'broken pride', 'disaster'], ['disaster avoided', 'delayed disaster', 'fear of suffering']),

    new MajorArcana('XVII', 'The Star', 'major', false, ['hope', 'faith', 'rejuvenation'], ['faithlessness', 'discouragement', 'insecurity']),

    new MajorArcana('XVIII', 'The Moon', 'major', false, ['unconscious', 'illusions', 'intuition'], ['confusion', 'fear', 'misinterpretation']),

    new MajorArcana('XIX', 'The Sun', 'major', false, ['joy', 'success', 'celebration', 'positivity'], ['negativity', 'depression', 'sadness']),

    new MajorArcana('XX', 'Judgement', 'major', false, ['reflection', 'reckoning', 'awakening'], ['lack of self awareness', 'doubt', 'self loathing']),

    new MajorArcana('XXI', 'The World', 'major', false, ['fulfillment', 'harmony', 'completion'], ['incompletion', 'no closure']),

    new MajorArcana('fake', 'for testing', 'major', false, 'string', 'string')
  ]
}

/**
 * Vague boilerplate for writing and reading the tarotDeck object
 */
fs.writeFileSync('deck.json', JSON.stringify(tarotDeck));

const rawTarotDeck = fs.readFileSync('deck.json');
const parsedTarotDeck = JSON.parse(rawTarotDeck);

// console.log(parsedTarotDeck.deck);

module.exports = { parsedTarotDeck };