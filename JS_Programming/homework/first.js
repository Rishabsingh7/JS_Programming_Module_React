function multipleby(n)
{
    return (value) =>
    {
        return value*n;
    }
}

let result=multipleby(5);
console.log(result(4));