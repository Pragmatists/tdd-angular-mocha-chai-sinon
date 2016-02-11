//Documentation http://chaijs.com/api/bdd/
describe('Assertions ', function () {


  //Asserts that the target is deeply equal to value
  it('eql(val)', function () {
    expect('test').to.eql('test');
    expect({foo: 'bar'}).to.eql({foo: 'bar'});
    expect(1).to.eql(1);
    expect('4').to.not.eql(4);

  });

  //Asserts that the target is strictly equal (===) to value
  it('equal(val)', function () {
    expect('test').to.equal('test');
    expect(1).to.equal(1);

  });

  //Asserts that the target is deep equal (===) to value
  it('deep.equal(val)', function () {
    expect({foo: 'bar'}).to.deep.equal({foo: 'bar'});
    expect({foo: 'bar'}).not.to.deep.equal({foo: 'baz'});
  });

  //Asserts that the target is true
  it('true', function () {
    expect(true).to.be.true;
    expect(false).to.not.be.true;
    expect(1).to.not.be.true;

  });

  //Asserts that the target is truthy
  it('ok', function () {
    expect(true).to.be.ok;
    expect(false).to.not.be.ok;
    expect(1).to.be.ok;
    expect(0).to.not.be.ok;

  });

  //Asserts that the target is false
  it('false', function () {
    expect(false).to.be.false;
    expect(true).to.not.be.false;
    expect(0).to.not.be.false;

  });


  //Asserts that the target is null
  it('null', function () {
    expect(null).to.be.null;
    expect(false).to.not.be.null;

  });

  //Asserts that the target is undefined
  it('undefined', function () {
    expect(undefined).to.be.undefined;
    expect(null).to.not.be.undefined;

  });

  //Asserts that the target is neither null nor undefined.
  it('exist', function () {
    var foo = 'bar'
        , bar;
    expect(foo).to.exist;
    expect(bar).to.not.exist;
  });


  //Asserts that the target is of given type
  it('typeof', function () {
    expect('test').to.be.a('string');

    expect(5).to.be.a('number');
    expect(new Number(1)).to.be.a('number');
    expect(Number(1)).to.be.a('number');
    expect(true).to.be.a('boolean');
    expect(new Array()).to.be.a('array');
    expect(new Object()).to.be.a('object');
    expect({}).to.be.a('object');
    expect([]).to.be.a('array');
    expect(function () {
    }).to.be.a('function');
    expect(null).to.be.a('null');

  });


  //Asserts that the target is within a range
  it('within(start, finish)', function () {
    expect(5).to.be.within(5, 10);
    expect(5).to.be.within(3, 6);
    expect(5).to.be.within(3, 5);
    expect(5).to.not.be.within(1, 3);
    expect('foo').to.have.length.within(2, 4);
    expect([1, 2, 3]).to.have.length.within(2, 4);

  });


  //Asserts that the target is greater than value
  it('above(n)', function () {
    expect(5).to.be.above(2);
    expect(5).to.be.greaterThan(2);
    expect(5).to.not.be.above(5);
    expect(5).to.not.be.above(6);
    expect('foo').to.have.length.above(2);
    expect([1, 2, 3]).to.have.length.above(2);

  });
//Asserts that the target is greater than or equal to value
  it('least(n)', function () {
    expect(5).to.be.at.least(2);
    expect(5).to.be.at.least(5);
    expect(5).to.not.be.at.least(6);
    expect('foo').to.have.length.of.at.least(2);
    expect([1, 2, 3]).to.have.length.of.at.least(2);


  });

  //Asserts that the target is less than value
  it('below(n)', function () {
    expect(2).to.be.below(5);
    expect(2).to.be.lessThan(5);
    expect(2).to.not.be.below(2);
    expect(2).to.not.be.below(1);
    expect('foo').to.have.length.below(4);
    expect([1, 2, 3]).to.have.length.below(4);

  });

  //Asserts that the target is less than or equal to value
  it('most(n)', function () {
    expect(2).to.be.at.most(5);
    expect(2).to.be.at.most(2);
    expect(2).to.not.be.at.most(1);
    expect(2).to.not.be.at.most(1);
    expect('foo').to.have.length.of.at.most(4);
    expect([1, 2, 3]).to.have.length.of.at.most(4);

  });

  //Asserts that the target's length is 0
  it('empty', function () {
    expect('').to.be.empty;
    expect('foo').not.to.be.empty;
    expect([]).to.be.empty;
    expect(['foo']).not.to.be.empty;
    expect({}).to.be.empty;
    expect({foo: 'bar'}).not.to.be.empty;

  });

  //Asserts that the target has a property name
  it('property(name)', function () {
    expect('test').to.have.property('length');
    expect(4).to.not.have.property('length');

    expect({'foo.bar': 'baz'})
        .to.have.property('foo.bar');
    expect({foo: {bar: 'baz'}})
        .to.not.have.property('foo.bar');

  });

  //Asserts that the target has a property deep references into objects and arrays
  it('deep.property(name)', function () {
    expect({'foo.bar': 'baz'})
        .to.not.have.deep.property('foo.bar');
    expect({foo: {bar: 'baz'}})
        .to.have.deep.property('foo.bar');

    expect({'foo': [1, 2, 3]})
        .to.have.deep.property('foo[1]');

    expect({'foo.bar[]': 'baz'})
        .to.have.deep.property('foo\\.bar\\[\\]');

  });
//Asserting that the value of property is strictly equal to value
  it('property(name, val)', function () {
    expect('test').to.have.property('length', 4);
    expect('asd').to.have.property('constructor', String);

    var deepObj = {
      green: {tea: 'matcha'}
      , teas: ['chai', 'matcha', {tea: 'konacha'}]
    };
    expect(deepObj).to.have.deep.property('green.tea', 'matcha');
    expect(deepObj).to.have.deep.property('teas[1]', 'matcha');
    expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha');

    expect(deepObj).to.have.property('teas')
        .that.is.an('array')
        .with.deep.property('[2]')
        .that.deep.equals({tea: 'konacha'});

    var arr = [
      ['chai', 'matcha', 'konacha']
      , [{tea: 'chai'}
        , {tea: 'matcha'}
        , {tea: 'konacha'}]
    ];
    expect(arr).to.have.deep.property('[0][1]', 'matcha');
    expect(arr).to.have.deep.property('[1][2].tea', 'konacha');

  });


//Assert the inclusion of an object in an array or a substring in a string
  it('include()', function () {
    expect(['foo', 'bar']).to.include('foo');
    expect(['foo', 'bar']).to.include('foo');
    expect(['foo', 'bar']).to.include('bar');
    expect([1, 2]).to.include(1);
    expect(['foo', 'bar']).to.not.include('baz');
    expect(['foo', 'bar']).to.not.include(1);
    expect({a: 1, b: 2}).to.include({b: 2});
    expect({a: 1, b: 2}).to.not.include({b: 3});
    expect({a: 1, b: 2}).to.include({a: 1, b: 2});
    expect({a: 1, b: 2}).to.not.include({a: 1, c: 2});

    expect([{a: 1}, {b: 2}]).to.include({a: 1});
    expect([{a: 1}]).to.include({a: 1});
    expect([{a: 1}]).to.not.include({b: 1});

  });

  //Asserts that the target contains any or all of the passed-in keys
  it('keys(array|Object|arguments)', function () {
    expect({foo: 1}).to.have.keys(['foo']);
    expect({foo: 1}).have.keys({'foo': 6});
    expect({foo: 1, bar: 2}).to.have.keys(['foo', 'bar']);
    expect({foo: 1, bar: 2}).to.have.keys('foo', 'bar');
    expect({foo: 1, bar: 2}).have.keys({'foo': 6, 'bar': 7});

  });

  //Asserts that the function target will throw a specific error
  it('throw', function () {

    var goodFn = function () {
          return 1 === 1;
        }
        , badFn = function () {
          throw new Error('testing');
        };

    expect(goodFn).to.not.throw();
    expect(goodFn).to.not.throw(Error);

    expect(badFn).to.throw();
    expect(badFn).to.throw(Error);
    expect(badFn).to.throw(Error, 'testing');


  });

});
