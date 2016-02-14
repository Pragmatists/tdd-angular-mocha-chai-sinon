(function () {

    var Combat = function () {
    };
    Combat.prototype.attack = function (attacker, defender) {
        if (attacker.calculateHit(defender)) {
            defender.takeDamage(attacker.damage);
        }
    };

    var Character = function () {
    };
    Character.prototype.calculateHit = function () {
        // ...
    };
    Character.prototype.takeDamage = function () {
        // ...
    };

    describe('Stub', function () {

        it('test 1 - sub object instance', function () {
            var combat = new Combat(),
                defender = sinon.stub(new Character()),
                attacker = sinon.stub(new Character());

            attacker.damage = 5;
            attacker.calculateHit.returns(true);

            combat.attack(attacker, defender);

            //expect(defender.takeDamage) //was called once with parameter = 5;
        });
    });

})();
