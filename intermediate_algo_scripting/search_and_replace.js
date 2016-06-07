function myReplace(str, before, after) {
  return str.replace(before, formatString(before,after));
}

function formatString(firstString, secondString){
	if(isUperCaseChar(firstString.charCodeAt(0)) && 
	   !isUperCaseChar(secondString.charCodeAt(0))){
	   		strArray = secondString.split("");
	   		strArray[0] = strArray[0].toUpperCase();
	   		return strArray.join("");
	   }
	   return secondString;
}


function isUperCaseChar(charCode){
	return charCode >= 0x0041 && charCode <=0x005A;
}

myReplace("Let us get back to more Coding", "Coding", "algorithms");
