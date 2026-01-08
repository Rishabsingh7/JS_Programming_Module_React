//spread operator user for string
const arr1=[1,2,3,4];
const arr2=[1,2,3,4,5,6,7];

const concatarr=arr1.concat(arr2);
console.log(concatarr);
const str='Valtriix Solution';

//Spread Element
const newArr=[...arr1,...arr2,...str]
console.log(newArr)

