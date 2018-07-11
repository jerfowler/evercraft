const alignments = ['Good', 'Neutral', 'Evil'];

class character {

    constructor() {
        this._name = 'name';
        this._alignment = 'Neutral';
        this._hitPoints = 5;
        this._armor = 10;
    }

    get name() {
        return this._name;
    }

    set name(val) {
        this._name = val;
    }

    get alignment() {
        return this._alignment;
    }

    set alignment(val) {
        this._alignment = alignments.indexOf(val) > -1 ? val : 'Neutral';
    }

    get hitPoints() {
      return this._hitPoints;
    }

    get armor() {
      return this._armor;
    }

}

module.exports = character;