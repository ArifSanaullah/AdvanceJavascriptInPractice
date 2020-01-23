// Ordinary Objects have all the default internal behavior forobjects in JS.
// Exotic objects have internal behavior that differs from  the default in the same way.
// Standard objects are those defined by ES6, such as array date and so on. These can be ordinary or exotic.
// Built-in objects ar present in a javascript execution environment when a script begins to execute. all stadard objects are built-in objects.

// An object can be of more then one types at once.

// function makePerson(name, age) {
//   return {
//     name,
//     age
//   };
// }

// const person = {
//     name: "arif",
//     sayName() {
//         console.log(`Hi, my name is ${this.name}.`)
//     }
// }
// person.sayName();

// Computed Property name

// let secondName = "second name";
// let suffix = " name";
// const person = {
//     "first name": "Arif",
//     [secondName]: "Sanaullah",
//     ["third"+suffix]: "Khan",
// }
// console.log(person);

// console.log(+0 === -0);
// console.log(Object.is(+0, -0));

// Mixins

// function mixin(receiver, supplier) {
//     Object.keys(supplier).forEach(key => {
//         receiver[key] = supplier[key]
//     });
//     return receiver;
// }

// const person = {
//     sex: 'Male',
//     religion: "Islam",
// }
// const person2 = {
//     name: "Arif",
//     age: 45,
// }
// const person3 = Object.assign({}, person, person2);
// console.log(person3);

// const obj = {
//     0: "0",
//     c: "c",
//     1: "1",
//     a: "a",
//     2: "2",
//     b: "b",
//     3: "3",
// }
// obj.d = "d";
// console.log(Object.getOwnPropertyNames(obj).join(""))

// Prototypes

// let person = {
//     calling: "Hello"
// }
// let animal = {
//     calling: "owwwwwww"
// }

// let friend = Object.create(person);
// console.log(Object.getPrototypeOf(friend) === person);

// Object.setPrototypeOf(friend, animal);
// console.log(friend.calling)

// Super
// allows you to access functionality of prototype object

let person = {
  greet() {
    return "Hello";
  }
};
let animal = {
  greet() {
    return "Owwwwwwww";
  }
};
let friend = {
  greet() {
    // old/hard way
    // return Object.getPrototypeOf(this).greet.call(this) + " world";
    return super.greet() + " World";
  }
};

let cousin = Object.create(friend);
console.log(Object.setPrototypeOf(friend, person).greet());
console.log(cousin.greet());
