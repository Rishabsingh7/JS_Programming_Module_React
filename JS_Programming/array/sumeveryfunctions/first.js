let arr=[10,4,2,12];
console.log(arr);

// const result=arr.some((num)=>
// {
//     console.log(num*20);
//     return null;
// })
// console.log(result);


const result=arr.some((num)=>
{
    return num>15;
})
console.log(result);