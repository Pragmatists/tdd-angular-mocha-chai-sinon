(function () {

    var myClass = {
        doTimeout: function (cb) {
            setTimeout(cb, 1000);
        }
    };
//TODO make the assertions passing
    describe('FakeTimers', function () {

        var clock,
            spy,
            cb = function () {
            };

        beforeEach(function () {
            spy = sinon.spy(cb);
        });

        afterEach(function () {
            clock.restore();
        });

        it('can be used to test timeouts', function () {
            clock = sinon.useFakeTimers();

            myClass.doTimeout(spy);
            //TODO use clock to pass the timeout needed to call callback

            //expect(spy).to.have.been.called;
        });

        it('can be used to fake dates', function () {
            var initialDate = 1357423755011,
                clock = sinon.useFakeTimers(initialDate);

            //clock.tick(1000);
            var date2 = Date.now();

            //expect(date2).to.equal(1357423756011);
        });
    });

})();