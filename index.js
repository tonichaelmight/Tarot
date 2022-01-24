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
    // TESTS
    // new MajorArcana('fake', 'for testing', 'majo', false, 'string', [9, 8, true, 10.5, { a: 'b' }])
    // new MinorArcana('fake', 'Cups', 'minor', false, ['string'], ['string']),

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

    // CUPS
    new MinorArcana('Ace', 'Cups', 'minor', false, ['new feelings', 'spirituality', 'intuition'], ['emotional loss', 'blocked creativity', 'emptiness']),

    new MinorArcana('Two', 'Cups', 'minor', false, ['unity', 'partnership', 'connection'], ['imbalance', 'broken communication', 'tension']),

    new MinorArcana('Three', 'Cups', 'minor', false, ['friendship', 'community', 'happiness'], ['overindulgence', 'gossip', 'isolation']),

    new MinorArcana('Four', 'Cups', 'minor', false, ['apathy', 'contemplation', 'disconnectedness'], ['sudden awareness', 'choosing happiness', 'acceptance']),

    new MinorArcana('Five', 'Cups', 'minor', false, ['loss', 'grief', 'self-pity'], ['acceptance', 'moving on', 'finding peace']),

    new MinorArcana('Six', 'Cups', 'minor', false, ['familiarity', 'happy memories', 'healing'], ['moving forward', 'leaving home', 'independence']),

    new MinorArcana('Seven', 'Cups', 'minor', false, ['searching for purpose', 'choices', 'daydreaming'], ['lack of purpose', 'diversion', 'confusion']),

    new MinorArcana('Eight', 'Cups', 'minor', false, ['walking away', 'disillusionment', 'leaving behind'], ['avoidance', 'fear of change', 'fear of loss']),

    new MinorArcana('Nine', 'Cups', 'minor', false, ['satisfaction', 'emotional stability', 'luxury'], ['lack of inner joy', 'smugness', 'dissatisfaction']),

    new MinorArcana('Ten', 'Cups', 'minor', false, ['inner happiness', 'fulfillment', 'dreams coming true'], ['shattered dreams', 'broken family', 'domestic disharmony']),

    new MinorArcana('Page', 'Cups', 'minor', false, ['happy surprise', 'dreamer', 'sensitivity'], ['emotional immaturity', 'insecurity', 'disappointment']),

    new MinorArcana('Knight', 'Cups', 'minor', false, ['following the heart', 'idealist', 'romantic'], ['moodiness', 'disappointment']),

    new MinorArcana('Queen', 'Cups', 'minor', false, ['compassion', 'calm', 'comfort'], ['martyrdom', 'insecurity', 'dependence']),

    new MinorArcana('King', 'Cups', 'minor', false, ['compassion', 'control', 'balance'], ['coldness', 'moodiness', 'bad advice']),

    // PENTACLES
    new MinorArcana('Ace', 'Pentacles', 'minor', false, ['opportunity', 'prosperity', 'new venture'], ['lost opportunity', 'missed chance', 'bad investment']),

    new MinorArcana('Two', 'Pentacles', 'minor', false, ['balancing decisions', 'priorities', 'adapting to change'], ['loss of balance', 'disorganized', 'overwhelmed']),

    new MinorArcana('Three', 'Pentacles', 'minor', false, ['teamwork', 'collaboration', 'building'], ['lack of teamwork', 'disorganized', 'group conflict']),

    new MinorArcana('Four', 'Pentacles', 'minor', false, ['conservation', 'frugality', 'security'], ['greediness', 'stinginess', 'possessiveness']),

    new MinorArcana('Five', 'Pentacles', 'minor', false, ['need', 'poverty', 'insecurity'], ['recovery', 'charity', 'improvement']),

    new MinorArcana('Six', 'Pentacles', 'minor', false, ['charity', 'generosity', 'sharing'], ['strings attached', 'stinginess', 'power and domination']),

    new MinorArcana('Seven', 'Pentacles', 'minor', false, ['hard work', 'perseverance', 'diligence'], ['work without results', 'distractions', 'lack of rewards']),

    new MinorArcana('Eight', 'Pentacles', 'minor', false, ['apprenticeship', 'passion', 'high standards'], ['lack of passion', 'uninspired', 'no motivation']),

    new MinorArcana('Nine', 'Pentacles', 'minor', false, ['fruits of labor', 'rewards', 'luxury'], ['reckless spending', 'living beyond means', 'false success']),

    new MinorArcana('Ten', 'Pentacles', 'minor', false, ['legacy', 'culmination', 'inheritance'], ['fleeting success', 'lack of stability', 'lack of resources']),

    new MinorArcana('Page', 'Pentacles', 'minor', false, ['ambition', 'desire', 'diligence'], ['lack of commitment', 'greediness', 'laziness']),

    new MinorArcana('Knight', 'Pentacles', 'minor', false, ['efficiency', 'hard work', 'responsibility'], ['laziness', 'obsessiveness', 'work without reward']),

    new MinorArcana('Queen', 'Pentacles', 'minor', false, ['practicality', 'creature comforts', 'financial security'], ['self-centeredness', 'jealousy', 'smothering']),

    new MinorArcana('King', 'Pentacles', 'minor', false, ['abundance', 'prosperity', 'security'], ['greed', 'indulgence', 'sensuality']),

    // SWORDS 
    new MinorArcana('Ace', 'Swords', 'minor', false, ['breakthrough', 'clarity', 'sharp mind'], ['confusion', 'brutality', 'chaos']),

    new MinorArcana('Two', 'Swords', 'minor', false, ['difficult choices', 'indecision', 'stalemate'], ['lesser of two evils', 'no right choice', 'confusion']),

    new MinorArcana('Three', 'Swords', 'minor', false, ['heartbreak', 'suffering', 'grief'], ['recovery', 'forgiveness', 'moving on']),

    new MinorArcana('Four', 'Swords', 'minor', false, ['rest', 'restoration', 'contemplation'], ['restlessness', 'burnout', 'stress']),

    new MinorArcana('Five', 'Swords', 'minor', false, ['unbridled ambition', 'win at all costs', 'sneakiness'], ['lingering resentment', 'desire to reconcile', 'forgiveness']),

    new MinorArcana('Six', 'Swords', 'minor', false, ['transition', 'leaving behind', 'moving on'], ['emotional baggage', 'unresolved issues', 'resisting transition']),

    new MinorArcana('Seven', 'Swords', 'minor', false, ['deception', 'trickery', 'tactics and strategy'], ['coming clean', 'rethinking approach', 'deception']),

    new MinorArcana('Eight', 'Swords', 'minor', false, ['imprisonment', 'entrapment', 'self-victimization'], ['self acceptance', 'new perspective', 'freedom']),

    new MinorArcana('Nine', 'Swords', 'minor', false, ['anxiety', 'hopelessness', 'trauma'], ['hope', 'reaching out', 'despair']),

    new MinorArcana('Ten', 'Swords', 'minor', false, ['failure', 'collapse', 'defeat'], ["can't get worse", 'only upwards', 'inevitable end']),

    new MinorArcana('Page', 'Swords', 'minor', false, ['curiosity', 'restlessness', 'mental energy'], ['deception', 'manipulation', 'all talk']),

    new MinorArcana('Knight', 'Swords', 'minor', false, ['action', 'impulsiveness', 'defending beliefs'], ['no direction', 'disregard for consequences', 'unpredictability']),

    new MinorArcana('Queen', 'Swords', 'minor', false, ['complexity', 'perceptiveness', 'clear mindedness'], ['cold hearted', 'cruel', 'bitterness']),

    new MinorArcana('King', 'Swords', 'minor', false, ['head over heart', 'discipline', 'truth'], ['manipulative', 'cruel', 'weakness']),

    // WANDS 
    new MinorArcana('Ace', 'Wands', 'minor', false, ['creation', 'willpower', 'inspiration', 'desire'], ['lack of energy', 'lack of passion', 'boredom']),

    new MinorArcana('Two', 'Wands', 'minor', false, ['planning', 'making decisions', 'leaving home'], ['fear of change', 'playing safe', 'bad planning']),

    new MinorArcana('Three', 'Wands', 'minor', false, ['looking ahead', 'expansion', 'rapid growth'], ['obstacles', 'delays', 'frustration']),

    new MinorArcana('Four', 'Wands', 'minor', false, ['community', 'home', 'celebration'], ['lack of support', 'transience', 'home conflicts']),

    new MinorArcana('Five', 'Wands', 'minor', false, ['competition', 'rivalry', 'conflict'], ['avoiding conflict', 'respecting differences']),

    new MinorArcana('Six', 'Wands', 'minor', false, ['victory', 'success', 'public reward'], ['excess pride', 'lack of recognition', 'punishment']),

    new MinorArcana('Seven', 'Wands', 'minor', false, ['perseverance', 'defensive', 'maintaining control'], ['give up', 'destroyed confidence', 'overwhelmed']),

    new MinorArcana('Eight', 'Wands', 'minor', false, ['rapid action', 'movement', 'quick decisions'], ['panic', 'waiting', 'slowdown']),

    new MinorArcana('Nine', 'Wands', 'minor', false, ['resilience', 'grit', 'last stand'], ['exhaustion', 'fatigue', 'questioning motivations']),

    new MinorArcana('Ten', 'Wands', 'minor', false, ['accomplishment', 'responsibility', 'burden'], ['inability to delegate', 'overstressed', 'burnt out']),

    new MinorArcana('Page', 'Wands', 'minor', false, ['exploration', 'excitement', 'freedom'], ['lack of direction', 'procrastination', 'creating conflict']),

    new MinorArcana('Knight', 'Wands', 'minor', false, ['action', 'adventure', 'fearlessness'], ['anger', 'impulsiveness', 'recklessness']),

    new MinorArcana('Queen', 'Wands', 'minor', false, ['courage', 'determination', 'joy'], ['selfishness', 'jealousy', 'insecurities']),

    new MinorArcana('King', 'Wands', 'minor', false, ['big picture', 'leader', 'overcoming challenges'], ['impulsive', 'overbearing', 'unachievable expectations']),

  ]
}

/**
 * Vague boilerplate for writing and reading the tarotDeck object
 */
fs.writeFileSync('deck.json', JSON.stringify(tarotDeck));

const rawTarotDeck = fs.readFileSync('deck.json');
// this variable is exported to use for testing in test.js
const parsedTarotDeck = JSON.parse(rawTarotDeck);

// console.log(parsedTarotDeck);

module.exports = { parsedTarotDeck };