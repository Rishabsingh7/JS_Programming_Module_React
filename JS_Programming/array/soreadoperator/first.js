
//rest spread operator for the array
const arr1=[1,2,3,4];
const arr2=[1,2,3,4,5,6,7];

const concatarr=arr1.concat(arr2);
console.log(concatarr);

//Spread Element
const newArr=[...arr1,...arr2]
console.log(newArr)


//rest param for the object
const userintro={
    username:'Rajiv',
    userid:1234
}

const updateduser={...userintro}
console.log(updateduser);