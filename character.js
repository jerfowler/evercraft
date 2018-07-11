const alignments = ['Good', 'Neutral', 'Evil'];

const isValidAttributeScore = (val) => (!isNaN(val) && val > 0 && val < 21);


class HitPoints {

    constructor(base = 5, modifier = 0) {
        this.base = base;
        this.modifier = modifier;
        this.current = (base + modifier < 1) ? 1 : base + modifier ;
    }

}


class character {

    constructor() {
        this._name = 'name';
        this._alignment = 'Neutral';
        this._hitPoints = new HitPoints();
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
      return this._hitPoints.current;
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
          throw new Error('Not valid attribute score!');
      }
      this._abilities.strength = val;
    }

    set dexterity(val) {
      if (!isValidAttributeScore(val)) {
          throw new Error('Not valid attribute score!');
      }
      this._abilities.dexterity = val;

    }

    set constitution(val) {
      if (!isValidAttributeScore(val)) {
        throw new Error('Not valid attribute score!');
      }
      this._abilities.constitution = val;
      const modifier = this.getModifier('constitution');
      this._hitPoints = new HitPoints(this._hitPoints.base, modifier);
    }

    set wisdom(val) {
        if (!isValidAttributeScore(val)) {
            throw new Error('Not valid attribute score!');
        }
        this._abilities.wisdom = val;
    }

    set intelligence(val) {
        if (!isValidAttributeScore(val)) {
            throw new Error('Not valid attribute score!');
        }
        this._abilities.intelligence = val;
    }

    set charisma(val) {
        if (!isValidAttributeScore(val)) {
            throw new Error('Not valid attribute score!');
        }
        this._abilities.charisma = val;
    }

    canAttack(roll) {
        const modifier = this.getModifier('dexterity');
        return this._armor + modifier <= roll;
    }

    hit(roll, modifier = 0) {
        if (this.canAttack(roll)) {
            let loss = (roll === 20) ? 2 : 1;
            loss = (modifier < 0) ? 1 : loss + (modifier * loss);
            return this._hitPoints.current -= loss;
        }
    }

    getModifier(ability) {
        if (this._abilities.hasOwnProperty(ability)) {
            return Math.floor((this._abilities[ability]-10)/2);
        } else {
            throw `Ability ${ability} does not exist`;
        }
    }

    attack(person, roll) {
      const modifier = this.getModifier('strength');
      person.hit(roll, modifier);
    }

}

module.exports = character ;