const map = function(funcRefference, array){
  let mappedArray = [];
  for(let index=0; index<array.length; index++){
    mappedArray[index] = funcRefference(array[index]);
  }
  return mappedArray;
}

const filter = function(funcRefference, array){
  let filteredArray = [];
  for(let index=0; index<array.length; index++){
    if(funcRefference(array[index])){
      filteredArray.push(array[index]);
    }
  }
  return filteredArray;
}

exports.map = map;
exports.filter = filter;
