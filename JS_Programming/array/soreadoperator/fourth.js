const arr1=[1,2,3,4]
const arr2=[4,5,6,7,8]
const concatarr=[...arr1,...arr2]
console.log(concatarr)

function add(...num1)//num1 is rest parameter => take all arguments value add in one array
{
    console.log(num1);
    return num1.reduce((sum,cele)=>
    {
        return sum=sum+cele;
    },0)
   
}
//let result=add(...concatarr,12,44,55,66)
let result=add(...arr1,...arr2,12,44,55,66)
console.log(result)