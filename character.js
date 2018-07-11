class character {

    constructor() {
        this._name = 'name';
    }

    get name() {
        return this._name;
    }

    set name(val) {
        this._name = val;
    }


}

module.exports = character;