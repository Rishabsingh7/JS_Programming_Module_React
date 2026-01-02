//Seal function of object
//Object.seal() => prevent to add and delete new properties 
//                but they allow to replace or edit existing properties value
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
//Seal functions
console.log(empobj)
Object.seal(empobj)
empobj.city="Mumbai"
empobj.contact.email="xyz@gmail.com";
delete empobj.city
console.log(empobj);