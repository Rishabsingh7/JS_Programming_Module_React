function higherorderfunction(data)
{
      console.log(typeof(data));
}
// higherorderfunction("Hello Programmer")
// higherorderfunction(24)
// higherorderfunction(true);
// higherorderfunction(null);


function test()
{
      console.log("I am from test function")
}
//test is a call back function and demo as a higher order function
higherorderfunction(test);


/**
 * Higher Order Function and call back Function
 * Higher Order Function
 * Whichever the function accept the function as a parameter 
 * that function we called as higher order function
 * 
 * Call back Function
 * whichever the function we passed as a argument to any function 
 * then that function we called as call back function.
 */