const map = function( mapper, list ){
  let mappedArray = [];
  for(let index=0; index<list.length; index++){
    mappedArray[ index ] = mapper( list[ index ] );
  }
  return mappedArray;
}

const filter = function( predicate, list ){
  let filteredArray = [];
  for(let index=0; index<list.length; index++){
    if( predicate( list[ index ] ) ){
      filteredArray.push( list[ index ] );
    }
  }
  return filteredArray;
}

exports.map = map;
exports.filter = filter;
