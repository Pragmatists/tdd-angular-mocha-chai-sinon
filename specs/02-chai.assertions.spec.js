//TODO Finish assertions to make all tests pass
//Look at chai documentation at http://chaijs.com/api/bdd/

describe('Assertions ', function () {


  //Asserts that the target is deeply equal to value
  it('eql(val)', function () {
    //expect('test')  //'test'
    //expect({foo: 'bar'})  //{foo: 'bar'}
    //expect(1) //1
    //expect('4') //4

  });

  //Asserts that the target is strictly equal (===) to value
  it('equal(val)', function () {
    //expect('test')  //'test'
    //expect(1) //true;
    //expect(1) //1

  });

  //Asserts that the target is deep equal (===) to value
  it('deep.equal(val)', function () {
    //expect({foo: 'bar'}) //{foo: 'bar'}
    //expect({foo: 'bar'}) //{foo: 'baz'}
  });

  //Asserts that the target is true
  it('true', function () {
    //expect(true)
    //expect(false)
    //expect(1)

  });

  //Asserts that the target is truthy
  it('ok', function () {
    //expect(true)
    //expect(false)
    //expect(1)
    //expect(0)

  });

  //Asserts that the target is false
  it('false', function () {
    //expect(false)
    //expect(true)
    //expect(0)

  });


  //Asserts that the target is null
  it('null', function () {
    //expect(null)
    //expect(false)
    //expect(undefined)
  });

  //Asserts that the target is undefined
  it('undefined', function () {
    //expect(undefined)
    //expect(null)

  });

  //Asserts that the target is neither null nor undefined.
  it('exist', function () {
    var foo = 'bar'
      , bar;

    //expect(foo)
    //expect(bar)
  });


  //Asserts that the target is of given type
  it('a(type) - typeof', function () {
    //expect('test')//('string');
    //expect(5)//('number');
    //expect(new Number(1))//('number');
    //expect(Number(1))//('number');
    //expect(true)//('boolean');
    //expect(new Array())//('array');
    //expect(new Object())//('object');
    //expect({})//('object');
    //expect([])//('array');
  });


  //Asserts that the target is within a range
  it('within(start, finish)', function () {
    //expect(5)   //(5, 10);
    //expect(5)   //(3, 6);
    //expect(5)   //(3, 5);
    //expect(5)   //(1, 3);
  });


  //Asserts that the target is greater than value
  it('above(n)', function () {
    //expect(5) //(2);
    //expect(5) //(5);
    //expect(5) //(6);
    //expect('foo').to.have.length //(2);
    //expect([1, 2, 3]).to.have.length //(2);

  });
//Asserts that the target is greater than or equal to value
  it('least(n)', function () {
    //expect(5)  //(2);
    //expect(5) //(5);
    //expect(5) //(6);
    //expect('foo').to.have.length.of.at  //(2);
    //expect([1, 2, 3]).to.have.length.of.at  //(2);


  });

  //Asserts that the target is less than value
  it('below(n)', function () {
    //expect(2) //(5);
    //expect(2) //(5);
    //expect(2) //(2);
    //expect(2) //(1);
    //expect('foo').to.have.length //(4);
    //expect([1, 2, 3]).to.have.length //(4);

  });

  //Asserts that the target is less than or equal to value
  it('most(n)', function () {
    //expect(2) //(5);
    //expect(2) //(2);
    //expect(2) //(1);
    //expect('foo').to.have.length.of.at //(4);
    //expect([1, 2, 3]).to.have.length.of.at //(4);

  });

  //Asserts that the target's length is 0
  it('empty', function () {
    //expect('')
    //expect('foo')
    //expect([])
    //expect(['foo'])
    //expect({})
    //expect({foo: 'bar'})

  });

  //Asserts that the target has a property name
  it('property(name)', function () {
    //expect('test') //('length');
    //expect(4) //('length');

    //expect({'foo.bar': 'baz'}) //('foo.bar');
    //expect({foo: {bar: 'baz'}}) //('foo.bar');

  });

  //Asserts that the target has a property deep references into objects and arrays
  it('deep.property(name)', function () {
    //expect({'foo.bar': 'baz'}) //('foo.bar');
    //expect({foo: {bar: 'baz'}}) //('foo.bar');

    //expect({'foo': [1, 2, 3]}) //('foo[1]');

    //expect({'foo.bar[]': 'baz'})  //('foo\\.bar\\[\\]');

  });

  //Asserting that the value of property is strictly equal to value
  it('property(name, value) deep.property(name, val)', function () {
    //expect('test') //('length', 4);
    //expect('asd') //('constructor', String);

    var deepObj = {
      green: {tea: 'matcha'}
      , teas: ['chai', 'matcha', {tea: 'konacha'}]
    };

    //expect(deepObj) //('green.tea', 'matcha');
    //expect(deepObj) //('teas[1]', 'matcha');
    //expect(deepObj) //('teas[2].tea', 'konacha');

    var arr = [
      ['chai', 'matcha', 'konacha']
      , [{tea: 'chai'}
        , {tea: 'matcha'}
        , {tea: 'konacha'}]
    ];
    //expect(arr) //('[0][1]', 'matcha');
    //expect(arr) //('[1][2].tea', 'konacha');

  });

  it('chaining is possible', function(){
    var deepObj = {
      green: {tea: 'matcha'}
      , teas: ['chai', 'matcha', {tea: 'konacha'}]
    };

    //Assert in one chained assertion that
    //deepObj has property 'teas' that is of type 'array' with second element in table is equal to {tea: 'konacha'}

    //expect(deepObj)
  });

  //Assert the inclusion of an object in an array or a substring in a string
  it('include()', function () {
    //expect(['foo', 'bar'])  //('foo');
    //expect(['foo', 'bar']) //('foo');
    //expect(['foo', 'bar']) //('bar');
    //expect([1, 2]) //(1);
    //expect(['foo', 'bar']) //('baz');
    //expect(['foo', 'bar']) //(1);
    //expect({a: 1, b: 2}) //({b: 2});
    //expect({a: 1, b: 2}) //({b: 3});
    //expect({a: 1, b: 2}) //({a: 1, b: 2});
    //expect({a: 1, b: 2}) //({a: 1, c: 2});

    //expect([{a: 1}, {b: 2}]) //({a: 1});
    //expect([{a: 1}]) //({a: 1});
    //expect([{a: 1}]) //({b: 1});

  });

  //Asserts that the target contains any or all of the passed-in keys
  it('keys(array|Object|arguments)', function () {
    //expect({foo: 1}) //(['foo']);
    //expect({foo: 1}) //({'foo': 6});
    //expect({foo: 1, bar: 2}) //(['foo', 'bar']);
    //expect({foo: 1, bar: 2}) //('foo', 'bar');
    //expect({foo: 1, bar: 2}) //({'foo': 6, 'bar': 7});

  });

  //Asserts that the function target will throw a specific error
  it('throw', function () {

    var goodFn = function () {
        return 1 === 1;
      }
      , badFn = function () {
        throw new Error('testing');
      };

    //expect(goodFn);

    //expect(badFn)
    //expect(badFn) //(Error);
    //expect(badFn) //(Error, 'testing');


  });

});
