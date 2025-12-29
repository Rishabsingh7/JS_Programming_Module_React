function greetings(name)
{
    return called(name);
}
function called(name)
{
    console.log(`Hello ${name}`);
}
greetings('World!');