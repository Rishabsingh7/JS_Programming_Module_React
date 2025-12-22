//It is 4th way to define functions
// IIFE (Immediate Invoked Function Expression)

let a=10;
let b=20;

(function add(n1,n2)
{
  let result=n1+n2;
  console.log(result);
})(a,b);

/**
//How we define the function in javascript 

1.  Function Declaration
2.  Function Expression
3.  Anonymous Functions 
4.  IIFE (Immediate Invoked Function Expression)
      let a=10;
      let b=20;

      IIFE start here
      (function (a,b) 
      {
        let result=a+b;
        console.log(result);
      })(a,b); //IIEF end here

5. Arrow Functions
   ase as a function expression 

    let a-10;
    let b=20

    let addition = (a, b) =>
    {
        let result =a+b;
        console.log(result);
    }
        addition(a,b)


  # Hoisting  
           console.log(a) undefined
           var a=10;
           

           console.log(a)
           let b=20;
           variable of var


  # Function Hoisting: we invoke the function before the function definition in the program
                      and we getting output/execute function only for function declaration not 
                      for function expression.
                      






 */