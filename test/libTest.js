const assert = require('assert');
const { map } = require('../src/lib.js');

const isEven = function(number){
  return (number%2)==0;
}

const double = function(number){
  return number*2;
}

const square = function(number){
  return number*number;
}

const cube = function(number){
  return number*square(number);
}

describe('testing map function',function(){
  let array1,array2,array3;
  beforeEach(function(){
    array1 = [1, 2, 3];
    array2 = [3];
    array3 = [-1 , 0, 3];
  });
  it('should return array with double all elements',function(){
    assert.deepEqual(map(double,array1),[2,4,6]);
    assert.deepEqual(map(double,array2),[6]);
    assert.deepEqual(map(double,array3),[-2, 0, 6]);
  });
  it('should return with square all elements',function(){
    assert.deepEqual(map(square,array1),[1,4,9]);
    assert.deepEqual(map(square,array2),[9]);
    assert.deepEqual(map(square,array3),[1, 0, 9]);
  });
  it('should return with cube all elements',function(){
    assert.deepEqual(map(cube,array1),[1,8,27]);
    assert.deepEqual(map(cube,array2),[27]);
    assert.deepEqual(map(cube,array3),[-1, 0, 27]);
  });
});
