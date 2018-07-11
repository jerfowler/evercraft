const assert = require('assert');
const character = require('../character');
const name = 'Jeremy';

describe('Character', () => {
  it('it can get a name', () => {
    const jeremy = new character(name);
    assert.equal(jeremy.name, name);
  });

  it('can set a name', () => {
    const jeremy = new character();
    jeremy.name = name;
    assert.equal(jeremy.name, name);
  });
});