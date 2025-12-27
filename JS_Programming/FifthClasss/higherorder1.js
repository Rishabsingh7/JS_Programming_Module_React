function higherorder(tester)
{
    console.log("From higher order function")
    tester()
}

function tester()
{
    console.log("from call back function");
}
higherorder(tester)