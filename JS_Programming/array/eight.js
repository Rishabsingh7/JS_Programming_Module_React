const user1={
    username:'Rajiv',
    userid:12100,
    useradd:{
        city:'pune'
    }

}

const user2=structuredClone(user1)//deep copy using spread operator
console.log(user1);
console.log(user2);
user2.username='Mohan';
user2.useradd.city='Mumbai';
console.log(user1);
console.log(user2);

/**
 * 1. shallow Copy: Copy the object/array in another variable on only top level/first level
 *    A)Object assign() B)... spread operator
 *  
 * 
 * deep copy: copy the object and array  or deep level of element
 * 
 */