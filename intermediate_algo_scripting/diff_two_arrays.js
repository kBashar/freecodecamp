function diffArray(arr1, arr2) {
  return arrayDifference(arr1, arr2).concat(arrayDifference(arr2, arr1));
}

function arrayDifference(firstArray, secondArray)
{
	return firstArray.filter(function(val){
		return !secondArray.includes(val);
	});
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
