const assert = require('assert');
const character = require('../character');
const name = 'Jeremy';
const evil = 'Evil';

describe('Character', () => {
  it('it can get a name', () => {
    const jeremy = new character();
    jeremy.name = name;
    assert.equal(jeremy.name, name);
  });

  it('can set a name', () => {
    const jeremy = new character();
    jeremy.name = name;
    assert.equal(jeremy.name, name);
  });
});

describe('Alignment', () => {
  it('can get and set alignment', () => {
    const john = new character();
    john.alignment = evil;
    assert.equal(john.alignment, evil);
  });

  it('won\'t accept poop', () => {
    const john = new character();
    john.alignment = 'poop';
    assert.notEqual(john.alignment, 'poop');
  });

  it('defaults to Neutral', () => {
      const john = new character();
      john.alignment = 'poop';
      assert.equal(john.alignment, 'Neutral');
  });

});

describe('Abilities', () => {

  const abilities = ['strength', 'intelligence', 'wisdom', 'dexterity', 'constitution', 'charisma'];

  abilities.forEach((ability) => {
    it(`can set ${ability} with a default of 10`, () => {
        const sam = new character();
        assert.equal(sam[ability], 10);
    });
  });

  it('cannot be set greater than 20', () => {
    const sam = new character();

    try {
        sam.strength = 21;
        assert.notEqual(sam.strength, 21)
    } catch (e) {
        assert.equal(sam.strength, 10);
        assert.equal(e.message, "Not valid attribute score!")
    }

  });

  it('cannot be set less than 1', () => {
      const sam = new character();

      try {
          sam.strength = 0;
          assert.notEqual(sam.strength, 0)
      } catch (e) {
          assert.equal(sam.strength, 10);
          assert.equal(e.message, "Not valid attribute score!")
      }

  });

  describe('Abilities have modifiers', () => {
    const modifiers = [null,-5,-4,-4,-3,-3,-2,-2,-1,-1,0,0,1,1,2,2,3,3,4,4,5];

    modifiers.forEach((val, idx) => {
      if (idx === 0) return;
      it(`returns ${val} for ability score of ${idx}`, () => {
        const sam = new character();
        sam.strength = idx;
        assert.equal(sam.getModifier('strength'), val);
      });
    });
  });
});
