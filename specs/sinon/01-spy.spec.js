var mySUT = {
	callCallback : function(cb) {
		cb();
	},
	callCallbackWithReturnValue : function(cb) {
		return cb();
	},
	callDependency : function(dep) {
		return dep.someMethod();
	}
};

function realCallback() {
	return 4;
}

var myDep = {
	someMethod: function() {
		return 10;
	}
};

describe('Spy', function() {

	it('can spy on callback', function() {
		var spy = sinon.spy();

		mySUT.callCallback(spy);

		//expect(spy) //have been called;
	});

	it('can spy on real callback function implementation', function() {
		var spy = sinon.spy(realCallback),
			returnValue = mySUT.callCallbackWithReturnValue(spy);

		//expect(spy) //have been called;
		//expect(returnValue) //is 4;
	});

	it('can spy on method of an object', function() {
		var spy = sinon.spy(myDep, 'someMethod');

		var	returnValue = mySUT.callDependency(myDep);

		//expect(spy) //have been called;
		//expect(returnValue) //is 10;
	});
});
