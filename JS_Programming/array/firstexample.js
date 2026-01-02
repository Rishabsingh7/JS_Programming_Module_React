let fruits=['mango','apple','grapes','watermelon']
console.log(fruits);

//1. push: add the new elements at last
fruits.push('muskmelon')
console.log(fruits)

//2. pop: remove the last element from existing arrays
console.log(fruits.pop());
console.log(fruits)

//unshift add the new elements at first location
fruits.unshift('muskmelon');
console.log(fruits);

//shift : remove the first element of array
console.log(fruits.shift());
console.log(fruits);



//concat: combine two array and return the value of combine array
let myfruits=['muskmelon', 'banana', 'strawberry','cherry','apple']
console.log(myfruits);

console.log(fruits);
console.log(fruits.concat(myfruits));


//indexof(): return the index of element whichever we search in the array
console.log(fruits.indexOf('apple'));


// includes: it check the if that element is present or not inside the array
console.log(fruits.includes('apple'));
console.log(fruits.includes('mango'));


//sort: sort the array elements
// sort function is perform operation on original arrays
console.log(fruits);
fruits.sort()
console.log(fruits);

//reverse : its shows the reverse element of array and store in original arrays
fruits.reverse();
console.log(fruits);


// slice: take subarray of particular size from the existing array
console.log(fruits.slice(1));

// splice: Removes elements from an array and , if necessary, inserts new elements in
// their place, returning the deleted elements.
console.log(fruits);
console.log(fruits.splice(0,3,'banana','cherry','mango'))
console.log(fruits)


