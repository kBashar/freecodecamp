function sumAll(arr) {
  return arithmaticSeries(Math.max(arr[0],arr[1])) - arithmaticSeries(Math.min(arr[0],arr[1])-1);
}

function arithmaticSeries(val) 
{
  return (val/2)*(1+val);
}

sumAll([1, 4]);
