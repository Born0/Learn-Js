////////////-------------------Object Literals
const person={
    firstName:'John',
    lastName:'Doe',
    age:26,
    hobbies:['music','movies'],
    address:{
        street:'50 Main st',
        city:'Boston',
        state:'MA'
    }
}
//console.log(person);

// console.log(person.firstName,person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

const{firstName,lastName, address:{city}}=person;
//console.log(firstName,lastName,city);
person.email='person@email.com';
console.log(person);