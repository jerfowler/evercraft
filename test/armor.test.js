const assert = require('assert');
const character = require('../character');

describe('Armor', () => {
    it ('has default armor of 10', () => {
        const bob = new character();
        assert.equal(bob.armor, 10);
    });
});

describe('Hit Points', () => {
    it('has default hit points of 5', () => {
        const steve = new character();
        assert.equal(steve.hitPoints, 5);
    });
});