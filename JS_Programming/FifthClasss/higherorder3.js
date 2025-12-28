function counter()
{
    console.log("From higher order function")
    let count=0;
    return countdisplay;
}

function countdisplay(count)
{
   // count++;
    console.log("from function counter display")
}
console.log(counter())