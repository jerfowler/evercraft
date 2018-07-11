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