const assert = require('assert');
const character = require('../character');
const name = 'Jeremy';

describe('Character', () => {
  it('it can get and set a name', () => {
    character.name = name;
    assert.equal(character.name, name);
  });
});