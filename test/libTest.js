const assert = require('assert');
const { map, filter } = require('../src/lib.js');

describe('map',function(){
  let double = x=>x*2;

  it('of empty array should return empty array.',function(){
    let emptyArray = [];
    assert.deepEqual( map( double, emptyArray ), [] );
  });

  it('of single element should return array with that mapping element',function(){
    let singleElement = [ 2 ];
    assert.deepEqual( map( double, singleElement ), [ 4 ] );
  });

  it('should return array with same arity and mapped elements',function(){
    let multipleElement = [ 1, 2, 3, 4, 5 ];
    assert.deepEqual( map( double, multipleElement ), [ 2, 4, 6, 8, 10 ] );
  });
});

describe('filter' ,function(){
  let isEven = x=>(x%2==0);

  it('should return empty array for filtering empty array',function(){
    let emptyArray = [];
    assert.deepEqual( filter( isEven, emptyArray), [] );  
  });
});
