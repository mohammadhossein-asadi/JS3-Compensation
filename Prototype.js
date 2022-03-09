// # Prototype

// * String , Array , Object , ...

//# example String.prototype

// let name = "John";
// console.log(name.__proto__);

// String.prototype.greet = function () {
//   alert(`Hi ${this}!`);
// };

// const person = "Ali";

// person.greet();

// console.log(String.prototype);
// console.log(person.__proto__);



// String.prototype.hello = (name) => alert(`HI ${name}!`);

// const name1 = "Sam";

// name1.hello("Sam");

// name1.toLowerCase();

// const name2 = "Jason";

// name2.hello("Jason");

//# constructor function

//# constructor function
// class Person {
//     constructor() {
//         this.name = 'John',
//             this.age = 23;
//     }
// }

//# creating objects
// const person1 = new Person();
// const person2 = new Person();
// console.log(person1);
// console.log(person2);
// //# adding property to constructor function
// Person.prototype.gender = 'male';
// console.log(person1.gender);
// console.log(person1.age);
// console.log(person2.gender);
// console.log(person2.age);
// //# prototype value of Person
// console.log(Person.prototype);

// //# inheriting the property from prototype

//# Add Methods to a Constructor Function Using Prototype

// constructor function
    // class Person {
    //     constructor() {
    //         this.name = 'John',
    //             this.age = 23;
    //     }
    // }

// // creating objects
// const person1 = new Person();
// const person2 = new Person();

// // adding a method to the constructor function
// Person.prototype.greet = function() {
//     console.log(`Hello ${this.name} :)`);
// }

// person1.greet();
// person2.greet();
// console.log(Person.prototype);

//# Changing Prototype

// constructor function
    // class Person {
    //     constructor() {
    //         this.name = 'John';
    //     }
    // }

// // add a property
// Person.prototype.age = 20;

// // creating an object
// const person1 = new Person();

// console.log(person1.age); 

// // changing the property value of prototype
// Person.prototype = { age: 50 }

// // creating new object
// const person3 = new Person();

// console.log(person3.age);
// console.log(person1.age);

// console.log(Person.prototype);

// * Note: You should not modify the prototypes of standard JavaScript built-in objects like strings, arrays, etc. It is considered a bad practice.

// * Note: You can also access the prototype property of a constructor function from an object.

// class Person {
//     constructor() {
//         this.name = "John";
//     }
// }

// // adding a prototype
// Person.prototype.age = 24;

// // creating object
// const person = new Person();

// // accessing prototype property
// console.log(person.__proto__);
