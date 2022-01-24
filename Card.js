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

    reverse() {
        this.reversed = !this.reversed;
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

module.exports = { MajorArcana, MinorArcana }