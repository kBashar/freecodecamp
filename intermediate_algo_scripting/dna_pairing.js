pair = {
  "A": "T",
  "T": "A",
  "C": "G",
  "G": "C",
};

function pairElement(str) {
  strArray = str.split("");
  return strArray.map(function(val){
  	return [val, pair[val]];
  });
}

pairElement("GCG");
