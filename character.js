const alignments = ['Good', 'Neutral', 'Evil'];

const isValidAttributeScore = (val) => (!isNaN(val) && val > 0 && val < 21);

class character {

    constructor() {
        this._name = 'name';
        this._alignment = 'Neutral';
        this._hitPoints = 5;
        this._armor = 10;
        this._abilities = {
            strength: 10,
            dexterity: 10,
            constitution: 10,
            wisdom: 10,
            intelligence: 10,
            charisma: 10
        };
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

    get strength() {
        return this._abilities.strength;
    }

    get dexterity() {
        return this._abilities.dexterity;
    }

    get constitution() {
        return this._abilities.constitution;
    }

    get wisdom() {
        return this._abilities.wisdom;
    }

    get intelligence() {
        return this._abilities.intelligence;
    }
    
    get charisma() {
        return this._abilities.charisma;
    }

    set strength(val) {
      if (!isValidAttributeScore(val)) {
        throw 'Not valid attribute score!';
      }
      this._abilities.strength = val;
    }

    set dexterity(val) {
      if (!isValidAttributeScore(val)) {
        throw 'Not valid attribute score!';
      }
      this._abilities.dexterity = val;

    }

    set constitution(val) {
      if (!isValidAttributeScore(val)) {
        throw 'Not valid attribute score!';
      }
      this._abilities.constitution = val;
    }

    set wisdom(val) {
        if (!isNaN(val) && val > 0 && val < 21) {
            this._abilities.wisdom = val;
        }
    }

    set intelligence(val) {
        if (!isNaN(val) && val > 0 && val < 21) {
            this._abilities.intelligence = val;
        }
    }

    set charisma(val) {
        if (!isNaN(val) && val > 0 && val < 21) {
            this._abilities.charisma = val;
        }
    }

    canAttack(roll) {
        return this._armor <= roll;
    }

    hit(roll) {
        if (this.canAttack(roll)) {
            return this._hitPoints -= roll === 20 ? 2 : 1;
        }
    }

    getModifier(ability) {
      const score = this._abilities[ability];
      return modifiers[score];
    }

}

module.exports = character;