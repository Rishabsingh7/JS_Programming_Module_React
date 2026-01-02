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

//How to add new properties or delete from the existing objects
empobj.emailId='xyzvaltriix@edu';
console.log(empobj);
empobj.contact.country='India';
console.log(empobj);
delete empobj.experience;
console.log(empobj);


Object.freeze(empobj);
/**
 * Object.freeze(empobj) => By using this function of object we can not add,
 * delete and modify any properties in existing object.
 */
empobj.experience=12;
console.log(empobj);
empobj.city='Mumbai';
console.log(empobj);


