const assert = require('assert');
const character = require('../character');

describe('Attack', () => {
    it('can attack on a successful roll', () => {
        const steve = new character();
        assert.equal(steve.canAttack(20), true);
    });

    it('can\'t attack on an unsuccessful roll', () => {
        const steve = new character();
        assert.equal(steve.canAttack(5), false);
    });

});