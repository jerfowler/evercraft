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

  it('can set strength with a default of 10', () => {
    const sam = new character();
    assert.equal(sam.strength, 10);
  });

  it('can set intelligence with a default of 10', () => {
      const sam = new character();
      assert.equal(sam.intelligence, 10);
  });

  it('can set wisdom with a default of 10', () => {
      const sam = new character();
      assert.equal(sam.wisdom, 10);
  });

  it('can set dexterity with a default of 10', () => {
      const sam = new character();
      assert.equal(sam.dexterity, 10);
  });

  it('can set constitution with a default of 10', () => {
      const sam = new character();
      assert.equal(sam.constitution, 10);
  });

  it('can set charisma with a default of 10', () => {
      const sam = new character();
      assert.equal(sam.charisma, 10);
  });

  it('cannot be set greater than 20', () => {
    const sam = new character();
    sam.strength = 21;
    assert.equal(sam.strength, 10);
  });

  it('cannot be set less than 1', () => {
      const sam = new character();
      sam.strength = 0;
      assert.equal(sam.strength, 10);
  });

});