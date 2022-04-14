/*
const name= 'John';
const age= 26;
//concat
console.log('My name is '+name+' age is '+age);
//template
 console.log(`My name is ${name} age is ${age}`);

 ////-------------------------------------------string
 const  str="Hello world";
 console.log(str.length);
//  const strUpperCase= str.toUpperCase();
//  console.log(strUpperCase);
//  console.log(strUpperCase.substring(0,5));
console.log(str.split(''));

////-------------------------------------------Arrays
// const fruits= new Array('Apple','Banana','Orange');
// console.log(fruits);
const fruits2= ['Apple','Banana','Orange', 1, true];
console.log(fruits2);
fruits2[5]='Mango';
console.log(fruits2);

fruits2.push('Lemon');
console.log(fruits2);

fruits2.unshift('Strawberry');
console.log(fruits2);

fruits2.pop();
console.log(fruits2);

fruits2.pop();
console.log(fruits2);

console.log(Array.isArray(fruits2));

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
console.log(person);   */

/////////////-------------------Object arrays
const todos=[
    {
        id:1,
        text:'Take out trash',
        isCompleted:true
    },
    {
        id:2, 
        text:'Meeting with boss',
        isCompleted:true
    },
    {
        id:3,   
        text:'Dentist appt',
        isCompleted:false
    }
];

//console.log(todos);

const todoJSON= JSON.stringify(todos);
//console.log(todoJSON);

////////////-------------Loops
// for(let i=0;i< 10;i++)
// {
//     console.log(i);
// }

// let i=0;
// while(i<10)
// {
//     console.log(i);
//     i++;
// }

// for(let todo of todos)
// {
//     console.log(todo.text);
// }

todos.forEach(function(todo){
    console.log(todo.text);
});




