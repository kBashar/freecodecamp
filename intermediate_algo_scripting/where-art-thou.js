function whereAreYou(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  arr = collection.filter(function(val){
    for(var properties in source.keys())
      {
        if(!val.hasOwnProperty(properties) || (val[properties]===source[properties]))
          {
            return false;
          }
      }
    return true;
  });
  
  // Only change code above this line
  return arr;
}

whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
