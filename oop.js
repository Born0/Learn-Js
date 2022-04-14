
// //Constructor function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob =new Date(dob);
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// // Instances of Person
// const person1= new Person('john', 'doe', '03-11-1990');
// const person2= new Person('Marry', 'Smith','05-05-1995');

// console.log(person1);
// console.log(person1.getFullName());


/////------Class

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
}

const person1= new Person('john', 'doe', '03-11-1990');
console.log(person1);
