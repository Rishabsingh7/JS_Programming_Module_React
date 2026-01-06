let salary=[22,33,44,34,55,66,77]
let result=salary.filter(num=>
{
    if(num%2==0)
    {
        return num;
    }
}
)
console.log(result);