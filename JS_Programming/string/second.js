// Object:
/**
 * Object : one of the non  primitive data types
 *          and also called as reference type of data types
 * 
 *  Object: they have three sub data types
 *       Object Literals
 *       Array
 *       Function
 * 
 * 
 *   How to declare the object literals
 *   Object Literals: when we used object literals= whenever we have to store the data in 
 *   the form of key values pair
 */

//1. Object Literals

let empobj={
      id:12101,
      empname:'Rishab',
      jobrole:'software engineer',
      experience:12,
      city:'Pune',
      info:function()
      {
        console.log('Employee from Valtriix');
      },
      skills:['Java',"JS", "Python", "React","DBMS"],
      contact:{
        add:'Pune Maharashtra',
        pincode:411057,
        mobno:7845454545
      }
}
console.log(empobj);
console.log(empobj.skills);//if you want to access indivisual operator then object name and operator
console.log(empobj.id);
empobj.emailId='xyzvaltriix@edu';
console.log(empobj);
empobj.contact.country='India';
console.log(empobj);



let empobj1={
      id:12101,
      empname:'Rishab',
      jobrole:'software engineer',
      experience:12,
      city:'Pune',
      info:function()
      {
        console.log('Employee from Valtriix');
      },
      skills:['Java',"JS", "Python", "React","DBMS"],
      contact:{
        add:'Pune Maharashtra',
        pincode:411057,
        mobno:7845454545
      }
}
console.log(empobj1);
console.log(empobj1.skills);//if you want to access indivisual operator then object name and operator
console.log(empobj1.id);
empobj1.emailId='xyzvaltriix@edu';
console.log(empobj1);
empobj1.contact.country='India';
console.log(empobj1);


console.log(empobj==empobj1)
delete empobj1.info;
console.log(empobj1);