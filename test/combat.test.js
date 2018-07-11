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

describe('Damage', () => {
    it('takes 1 point of damage when hit', () => {
        const steve = new character();
        const hitPoints = steve.hitPoints; 
        assert.equal(steve.hit(11), hitPoints-1);
    });

    it('damage is doubled on critical hit', () => {
        const steve = new character();
        const hitPoints = steve.hitPoints; 
        assert.equal(steve.hit(20), hitPoints-2);
    });

    it('damage is doubled on critical hit', () => {
        const steve = new character();
        steve.hit(20);
        steve.hit(20);
        steve.hit(20);
        assert.ok(steve.hitPoints <= 0, 'character is dead');
    });

});