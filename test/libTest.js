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

describe('map',function(){
  it('should return array with double all elements',function(){
    assert.deepEqual(map(double,[1,2,3]),[2,4,6]);
  });
});
