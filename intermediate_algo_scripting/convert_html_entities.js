htmlEntities = {
    "&" : "&amp;",
    '<': "&lt;",
    '>': "&gt;",
    "'": "&apos;",
    '"': "&quot;"
}


function convertHTML(str) {
 return str.replace(/&|<|>|'|\"/g, function (match){
      return htmlEntities[match];
  });
}

console.log(convertHTML('Stuff in "quotation marks"'));