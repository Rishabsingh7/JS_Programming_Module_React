/**
 * Arrays
 *   Array is also one of the non primitive data types
 *   reference type data type
 * 
 *   let arr=["rishab", 11, true, null, undefined]
 */

let obj={
    id:12001,
    empname:'Rishab',
    address:'Siwan'
}
function display()
{
    console.log("From display function")
}
console.log(typeof(obj));
let arr=['Valtriix', 12, true, null, undefined, obj,
    [12,56,89,90],
    display
]
console.log(arr);
console.log(arr[3]);
console.log(arr[7]());
console.log(typeof(arr));