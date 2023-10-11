//01. Convert a Number to a String!

function numberToString(num){
    return num.toString();
}

console.log(numberToString(2))

//function numberToString(num){
//  return String(num);
//}


//function numberToString(num){
//    return ''+num;
//}

//const numberToString=num=>`${num}`;

//02. Remove any vowel from the entered string and returns a new striing without any vowel
function disemvowel(str){
    return str.replace(/[aeiou]/gi,'');
}

console.log(disemvowel("jenelyn delin"))

//disemvowel = str => str.replace(/[aeiou]/gi,'');


//Solution breakdown: 1. str.replace: This is a method used on strings in JavaScript to replace parts of the string with another value.

//2. /[aeiou]/gi: This is a regular expression enclosed in forward slashes. It defines a pattern to search for in the string. In this case, [aeiou] matches any vowel character (a, e, i, o, or u), and the g and i flags are used:

//g stands for "global," which means it will replace all occurrences of the pattern in the string, not just the first one.
//i stands for "case-insensitive," which means it will match both uppercase and lowercase vowels.

//3. '': This is an empty string that is used as the replacement for each match found in the string. Since it's empty, it effectively removes the matched vowels.

//So, when you call disemvowel("Hello, World!"), it will return "Hll, Wrld!" because it removed all the vowels from the input string.


//03. Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
    return parseInt(bin,2);
  }

  