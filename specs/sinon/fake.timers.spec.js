var myClass = {
    doTimeout: function (cb) {
        setTimeout(cb, 1000);
    }
};

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

    it('test 1 - timeouts', function () {
        clock = sinon.useFakeTimers();

        myClass.doTimeout(spy);
        clock.tick(1010);

        expect(spy).to.have.been.called;
    });

    it('test 2 - fake dates', function () {
        var initialDate = 1357423755011,
            clock = sinon.useFakeTimers(initialDate),
            date1 = Date.now();

        clock.tick(1000);
        var date2 = Date.now();

        expect(date2).to.equal(1357423756011);
    });
});
