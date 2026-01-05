let arr=[20,30,10,20,34];
arr.forEach(function(num,index)
{
    console.log(num*2);
});



let salary=[20,30,10,20,34];
salary.forEach(function(num,index)
{
    console.log(num*2.5);
});

console.log(salary);

//Difference between for of and for Each loop

//For of   
/**
 * syntax  
 *   for(const ele of obj)
 * {
 *  //access each of ele of array
 * }
 *  it's not applicable to object , it work on array,set and map
 */

// For in
/**
 * syntax 
 *   for(const ele(key) in object)
 * {
 *   console.log(object[ele])
 * }
 */


// For each
/* 
      syntax=>
        arr.forEach(function(element/parameter, index))
      {
      console.log(ele*2);
      }

*/
 