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


	it('test 1 - spy on callback', function() {
		var spy = sinon.spy();
		mySUT.callCallback(spy);
		expect(spy).to.have.been.called;
	});

	it('test 2 - spy on real callback function implementation', function() {
		var spy = sinon.spy(realCallback),
			returnValue = mySUT.callCallbackWithReturnValue(spy);
		expect(spy).to.have.been.called;
		expect(returnValue).to.equal(4);
	});

	it('test 3 - spy on method of an object', function() {
		var spy = sinon.spy(myDep, 'someMethod'),
			returnValue = mySUT.callDependency(myDep);
		expect(spy).to.have.been.called;
		expect(returnValue).to.equal(10);
	});
});
