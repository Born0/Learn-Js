
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




