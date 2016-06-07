function translatePigLatin(str) {
  if (isVowel(str.toLowerCase().charCodeAt(0))) {
  	return str + "way";
  }
  else {
  	strArray = str.split("");
  	pigArray = [];
  	while(true)
  	{
  		char = strArray.shift();
  		if(!isVowel(char.charCodeAt(0))) {
  			pigArray.push(char);
  		}
  		else {
  			strArray.unshift(char);
  			break;
  		}
  	}
  	return strArray.join('') + pigArray.join('') + "ay";
  }
}

function isVowel(codeChar)
{
	return (codeChar == 0x0061) || (codeChar == 0x0065) || (codeChar == 0x0069) || (codeChar == 0x006F) || (codeChar == 0x0075);
}

translatePigLatin("algorithm");
