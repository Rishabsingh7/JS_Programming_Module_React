let salary=[20,30,20,30,20];
let result=salary.map((num,index)=>
{
    console.log(`index ${index}=${num*2.5}`)
    return num*2;
})
console.log(result);//Its create a new array and store the result value of callback function
console.log(salary);//don't affect on original array element    