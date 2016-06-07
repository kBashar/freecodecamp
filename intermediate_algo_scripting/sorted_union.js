function uniteUnique(arr) {
  var arrays = Array.from(arguments);
  var resultArray = arrays[0];
  for(i = 1; i < arrays.length; i++) {
    resultArray = arrayUnion(resultArray, arrays[i]);
  }
  return resultArray;
}

function arrayUnion(array1, array2) {
  return array1.concat(array2.filter(function (params) {
    return array1.indexOf(params)<0? true:false;
  }));
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);