/**
 * Loop - To traverse inside the array and access each element
 *                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
 */

let arr=[20,30,40,10]
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

//access individual element
for(let i=0;i<arr.length;i++)
{
    //console.log("arr[",i,"]=",arr[i]);
    console.log(`arr[${i}]=${arr[i]}`)
}

//for of
for(const ele of arr)
{
    if(ele>20)
    {
         console.log(ele);
    }
}


// let obj={
//     sname:'Rajiv',
//     sid:22012
// }
// console.log('+++++++++');
// for(const ele of obj) //its not applicable on object
// {
//     console.log(ele);
// }