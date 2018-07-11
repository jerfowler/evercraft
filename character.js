const alignments = ['Good', 'Neutral', 'Evil'];

class character {

    constructor() {
        this._name = 'name';
        this._alignment = 'Neutral'
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

}

module.exports = character;