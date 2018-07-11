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

    describe('Modifiers', () => { 
        it('Negative dexterity modifier reduces armor', () => {
            const steve = new character();
            steve.dexterity = 5;  // -3 armor
            assert.equal(steve.canAttack(7), true);
        });

        it('Positive dexterity modifier increases armor', () => {
            const steve = new character();
            steve.dexterity = 15;  // +2 armor
            assert.equal(steve.canAttack(10), false);
        })
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

    it('hit points are zero, character is dead', () => {
        const steve = new character();
        steve.hit(20);
        steve.hit(20);
        steve.hit(20);
        assert.ok(steve.hitPoints <= 0, 'character is dead');
    });

    describe('Modifiers', () => {

        it('should add modifier to damage dealt', () => {
            const steve = new character();
            const bob = new character();
            steve.strength = 15;  // +2 attack modifier
            steve.attack(bob, 15);
            assert.equal(bob.hitPoints, 2);  // 5 HP - (1 + 2) = 2 HP

        });

        it('should double the strength modifier on critical hits', () => {
            const steve = new character();
            const bob = new character();
            steve.strength = 15;  // +2 attack modifier
            steve.attack(bob, 20);
            assert.ok(bob.hitPoints <= 0);  // 5 HP - (2 + 4) = -1 HP
        });

        it('should have a minimum damage of 1', () => {
            const steve = new character();
            const bob = new character();
            steve.strength = 6;  // -2 attack modifier
            steve.attack(bob, 15);
            assert.equal(bob.hitPoints, 4);
        });
    });

});