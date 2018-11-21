const assert = require('assert');
const { map, filter } = require('../src/lib.js');

describe('map',function(){
  let array1,array2,array3;
  let double = x=>x*2;
  let square = x=>x*x;
  let cube = x=>x*x*x;

  beforeEach(function(){
    array1 = [1, 2, 3];
    array2 = [3];
    array3 = [-1 , 0, 3];
  });

  it('should return array with double all elements',function(){
    assert.deepEqual(map(double,array1),[ 2, 4, 6 ]);
    assert.deepEqual(map(double,array2),[ 6 ]);
    assert.deepEqual(map(double,array3),[ -2, 0, 6 ]);
  });
  it('should return with square all elements',function(){
    assert.deepEqual(map(square,array1),[ 1, 4, 9 ]);
    assert.deepEqual(map(square,array2),[ 9 ]);
    assert.deepEqual(map(square,array3),[ 1, 0, 9 ]);
  });
  it('should return with cube all elements',function(){
    assert.deepEqual(map(cube,array1),[ 1, 8, 27 ]);
    assert.deepEqual(map(cube,array2),[ 27 ]);
    assert.deepEqual(map(cube,array3),[ -1, 0, 27 ]);
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
