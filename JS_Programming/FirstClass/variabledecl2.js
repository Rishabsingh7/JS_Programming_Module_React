var a=10;//global scope

a=20;
console.log(a);//20

if(true)
{
    console.log(a);//20
}
console.log(a);//20