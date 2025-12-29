//String: sequence of character 
//String is primitive data type

let str='Hello World!!';
console.log(str);//display 
console.log(typeof(str));// check data type of str
//length is properties not function
console.log(str.length);//find out number of character in given string
console.log(str.toLowerCase());// to convert into lower case
console.log(str.toUpperCase());// to convert into upper case


console.log(str.trim());//remove starting and ending space of the string
console.log(str.trimStart())// remove only starting space
console.log(str.trimEnd());// remove only ending space
console.log(str);//trim function does not affect on our original string

let str2='Pune';
console.log(str.concat(str2)); //combine two string or concat

console.log(str);//concat does affects on the original string

console.log(str.includes(str2));// includes return the true or false value depending on the char or string is present in the given string or not
console.log(str.includes('W'));
console.log(str.indexOf('W'));// minus 1
console.log(str.indexOf('World'));// index of function is case sensitive functions


console.log(str.replace('l','m'));//replace first character with new character 
console.log(str.replaceAll('l','m'));// replace all character with new character
console.log(str);//replace and replaceAll they do not changes in original string
console.log(str.replace('World!!', 'Technology'));

//masking
let addharNumber='1234';
console.log(addharNumber.padStart(8,"*"));
console.log(addharNumber.padStart(12,"*"));


console.log(addharNumber.padEnd(8,"#"));
console.log(addharNumber.padEnd(12,"#"));



//str=' Itview Solution '
let result=str.split(" ")
console.log(result[0])
console.log(str)//split do not change any original string value 


