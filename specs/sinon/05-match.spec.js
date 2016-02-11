describe('Spy call argument can be asserted with', function() {

	it('exact comparison', function() {
		var spy = sinon.spy();

		spy('12345');

		expect(spy).to.have.been.calledWith('12345');
	});

	it('string matcher', function() {
		var spy = sinon.spy();

		spy('12345');

		expect(spy).to.have.been.calledWithMatch('123');
	});

	it('same matcher', function() {
		var spy = sinon.spy(),
			obj = {myyProp:1};

		spy(obj);

		expect(spy).to.have.been.calledWithMatch(sinon.match.same(obj));
	});

	it('has matcher - pass', function() {
		var spy = sinon.spy(),
			obj = {myProp: 13, myProp2: 15};

		spy(obj);

		expect(spy).to.have.been.calledWithMatch(sinon.match.has("myProp", 13));
	});

	it('custom matcher', function() {
		var spy = sinon.spy();

		var lessThan100 = sinon.match(function(value){
			return value < 100;
		}, "less than 100");

		spy(99);

		expect(spy).to.have.been.calledWithMatch(lessThan100);
	});


});
