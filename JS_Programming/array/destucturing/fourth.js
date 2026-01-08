const products = [
    {name :'Product 1', price:100},
    {name :'Product 2', price:200},
    {name :'Product 3', price:300}
];

const discountarray=products.map((ele)=>{
    return (ele.price-(ele.price*0.10))
})

const totalcost=discountarray.reduce((cost,cprice)=>{
    return cost=cost+cprice;
},0)
console.log(totalcost);