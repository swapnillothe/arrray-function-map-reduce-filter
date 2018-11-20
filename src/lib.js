const map = function(funcRefference, array){
  let mappedArray = [];
  for(let index=0; index<array.length; index++){
    mappedArray[index] = funcRefference(array[index]);
  }
  return mappedArray;
}

exports.map = map;
