function counter()
{
    console.log("function higher order function")
    let count=0;
    return ()=>
    {
        count++;
        console.log("from function counter display");
        return count;
    }
}
let result=counter();
console.log(result());