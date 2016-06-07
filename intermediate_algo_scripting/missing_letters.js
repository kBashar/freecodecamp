
function fearNotLetter(str) {
  start = str.charCodeAt(0);
  end = str.charCodeAt(str.length-1);
  missingLetters = [];
  for(iterator = start, i =0; iterator <= end; iterator++)	{
  	if(iterator != str.charCodeAt(i))	{
  		missingLetters.push(String.fromCharCode(iterator));
  	}
  	else	{
  		i++;
  	}
  }
  return missingLetters.length === 0 ? undefined : missingLetters.join("");
}
fearNotLetter("abce");