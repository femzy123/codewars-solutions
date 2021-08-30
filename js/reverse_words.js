// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  // Go for it
  var reversedArray = [];
  //   const newStr = str.split(" ")
  //   for (let i = 0; i < newStr.length; i++) {
  //     reversedArray.push(newStr[i].split("").reverse().join(""))
  //   }
  str
    .split(" ")
    .map((str) => reversedArray.push(str.split("").reverse().join("")));
  return reversedArray.join(" ");
}


// Best Practice according to codewars votes
function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}