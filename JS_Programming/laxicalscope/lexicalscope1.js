debugger
var globalvariable='I am script / global variable '

function outerfunction()
{
   let outervariable='I am outer variable';
   console.log("From outer function!!");
   console.log(outervariable);

   function innerfunction()
   {
    let innervariable='I am Inner type of variable';
    console.log('from inner function');
    console.log(innervariable);
    console.log(outervariable)
    console.log(globalvariable)
   }

   innerfunction();
}
outerfunction();
