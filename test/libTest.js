const assert = require('assert');
const { map, filter } = require('../src/lib.js');

describe('testing map function',function(){
  let double = x=>x*2;

  beforeEach(function(){
    emptyArray = [];
    singleElement = [ 2 ];
    multipleElement = [ 1, 2, 3, 4, 5 ];
  });

  describe('map' ,function(){
    it('of empty array should return empty array.',function(){
      assert.deepEqual( map( double, emptyArray ), [] );
    });
  });
  describe('map' ,function(){
    it('of single element should return array with that mapping element',function(){
      assert.deepEqual( map( double, singleElement ), [ 4 ] );
    });
  });
  describe('map' ,function(){
    it('should return array with same arity and mapping elements',function(){
      assert.deepEqual( map( double, multipleElement ), [ 2, 4, 6, 8, 10 ] );
    });
  });
});

describe('filter' ,function(){
  let isEven = x=>(x%2==0); 
  it('should return array with only even numbers ',function(){
    assert.deepEqual(filter(isEven,[ 1, 2, 3, 4, 5, 6 ]),[ 2, 4, 6 ]);
    assert.deepEqual(filter(isEven,[ 1, 3, 6 ]),[ 6 ]);
    assert.deepEqual(filter(isEven,[]),[]);
  });
});
