function demo(data)
{
    console.log(typeof(data))
    console.dir(data)
    data()
}

function test()
{
    console.log("I am from test functions");
}
demo(test)