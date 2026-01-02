//Operate on specific properties
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
Object.defineProperty(empobj,'id',{
    writable:false,
    configurable:false,
})

empobj.id=122222;
console.log(empobj);
delete empobj.id;
console.log(empobj)

/**
 * Object.defineProperty(ObjectName, 'PropertyName',
 * {
 * writable:false,
 * configurable:false
 * })
 * we restrict the specific properties settings with the
 * help of define property function  
 * 
 * 
 */
