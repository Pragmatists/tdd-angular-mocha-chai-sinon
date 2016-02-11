var Combat = function(){};
Combat.prototype.attack = function(attacker, defender){
	if(attacker.calculateHit(defender)) {
		defender.takeDamage(attacker.damage);
	}
};

var Character = function(){};
Character.prototype.calculateHit = function() {
	// ...
};
Character.prototype.takeDamage = function() {
	// ...
};

describe('Mock', function() {


	it('test 1 - mock object instance', function() {
		var combat = new Combat(),
			attacker = sinon.stub(new Character()),
			defender = new Character(),
			mockDefender = sinon.mock(defender),
			expectation = mockDefender.expects("takeDamage").once().withArgs(5);

		attacker.damage = 5;

		attacker.calculateHit.returns(true);

		combat.attack(attacker, defender);

		expectation.verify();
	});
});
