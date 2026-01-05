let obj={
    sname:'Rajiv',
    sid:12001
}
console.log(obj)


let leptop={
    type:'Dell',
    
}
for(const key in obj)
{
    //console.log(obj[key])
    console.log(`key ${key}:${obj[key]}`);
}