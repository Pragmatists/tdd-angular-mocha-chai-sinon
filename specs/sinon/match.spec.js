describe('Match', function() {

	it('test 1 - string matcher', function() {
		var spy = sinon.spy();

		spy('12345');

		expect(spy).to.have.been.calledWithMatch('123');
	});

	it('test 2 - same matcher', function() {
		var spy = sinon.spy(),
			obj = {myyProp:1};

		spy(obj);
		expect(spy).to.have.been.calledWithMatch(sinon.match.same(obj));
	});

	it('test 3 - has matcher - pass', function() {
		var spy = sinon.spy(),
			obj = {myProp: 13, myProp2: 15};

		spy(obj);
		expect(spy).to.have.been.calledWithMatch(sinon.match.has("myProp", 13));
	});

	it('test 4 - custom matcher', function() {
		var spy = sinon.spy();

		var lessThan100 = sinon.match(function(value){
			return value < 100;
		}, "less than 100");

		spy(99);
		expect(spy).to.have.been.calledWithMatch(lessThan100);
	});

	it('test 5 - combined matcher', function() {
		var spy = sinon.spy();

		var exactly50 = sinon.match(function(value){
			return value === 50;
		}, "exactly 50");

		var exactly100 = sinon.match(function(value){
			return value === 100;
		}, "exactly 100");

		spy(50);
		expect(spy).to.have.been.calledWithMatch(exactly50.or(exactly100));
		spy.reset();
		spy(100);
		expect(spy).to.have.been.calledWithMatch(exactly50.or(exactly100));
	});
});
