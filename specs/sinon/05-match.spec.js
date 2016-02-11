describe('Spy call argument can be asserted with', function() {

	it('exact comparison', function() {
		var spy = sinon.spy();

		spy('12345');

		//expect(spy) //called with '12345';
	});

	it('string matcher', function() {
		var spy = sinon.spy();

		spy('12345');

		//expect(spy) //called with arg matching'123';
	});

	it('same matcher', function() {
		var spy = sinon.spy(),
			obj = {myyProp:1};

		spy(obj);

		//expect(spy) //called with arg same as 'obj';
	});

	it('has matcher - pass', function() {
		var spy = sinon.spy(),
			obj = {myProp: 13, myProp2: 15};

		spy(obj);

		//expect(spy) //called with arg that has "myProp"=13;
	});

	it('custom matcher', function() {
		var spy = sinon.spy();

		spy(99);

		//create custom matcher "lessThan100"
		//expect(spy).to.have.been.calledWithMatch(lessThan100);

	});


});
