//let salary=[22,33,44,34,55,66,77]
//multiple every element of array with 2 and storing new arrays
// let result=salary.map(num=>num*2)
// console.log(salary);
// console.log(result);


let salary=[20,30,40,45,35,66];
//find out max or min element from given array

let result=salary.reduce((sum, ele)=>{
    return sum=sum+ele;
},0)

let result1=salary.reduce((max, ele)=>{
    return ele>max?ele:max;
},0)
console.log(result)
console.log(result1);
