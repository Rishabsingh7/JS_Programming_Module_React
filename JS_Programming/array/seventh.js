const user1={
    username:'Rajiv',
    userid:12100,
    useradd:{
        city:'pune'
    }

}

const user2={...user1} //shallow copy using spread operator
console.log(user1);
console.log(user2);
user2.username='Mohan';
user2.useradd.city='Mumbai';
console.log(user1);
console.log(user2);