//It is 4th way to define functions
// IIFE (Immediate Invoked Function Expression)

let a=10;
let b=20;

(function add(n1,n2)
{
  let result=n1+n2;
  console.log(result);
})(a,b);