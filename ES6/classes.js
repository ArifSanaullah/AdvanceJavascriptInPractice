// function Person(name) {
//     this.name = name;
// }
// Person.prototype.sayName = function () {
//     console.log(this.name);
// }

// let person = new Person("Arif");
// person.sayName();


// class PersonClass {
//     constructor(firstName) {
//         this.name = firstName;
//     }
//     sayName() {
//         console.log(this.name);
//     }
// }

// let anotherPerson = new PersonClass("Abid");
// anotherPerson.sayName();
// console.log(typeof PersonClass === typeof Person);

/**
 * Difference between classes and custome types
 * Class declarattion, Unlike functions, class declarations are not hoisted. Class declarations act like let declaration and so exist in the temporal dead zone until execution reaches the declaration.
 * All code inside of class declaration runs in strict mode automatically.
 * all methods are non-enumerable.
 * All methods lack and internal [[construt]] method and wull thorw an error if you try to call them with new.
 * Calling the class constructor withput new throws an error.
 * Attempting to overwrite the class name within the class method throws an error.
 *  */

//  Class Expression
// let classExpression = class {
//   constructor(firstName) {
//     this.name = firstName;
//   }
//   sayName() {
//     console.log(this.name);
//   }
// }


// First-class Classes

// function makeObj(objDef) {
//     return new objDef();
// }

// let obj = makeObj(class {
//     sayhi() {
//         console.log("Hello...!");
//     }
// });

// console.log(obj.sayhi())


// Simple Singletons

// const person = new class {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHi() {
//         console.log("Hello...!");
//     }
// }("Farhan");
// person.sayHi();


// Accessor properties
// let name = "html";
// class CustomeHTMLElement {
//     constructor(element) {
//         this.element = element;
//     }

//     get [name]() {
//         return this.element.innerHTML;
//     }
//     set html(value) {
//         this.element.innerHTML = value;
//     }
// }
// let div = document.querySelector(".element")
// const element = new CustomeHTMLElement(div);
// console.log(element.html)
// let list = `
// <ul>

//     <li>Hello </li>
//     <li>Hello </li>
//     <li>Hello </li>
//     <li>Hello </li>

// </ul>
// `;
// element.html = list;
// console.log(element.html)

// Generator class method

// class GenClass {
//     *makeClass() {
//         yield 1;
//         yield 2;
//         yield 3;
//     }
// }
// let instance = new GenClass();
// let iterator = instance.makeClass();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


// Default iterators
// class Collection {
//     constructor() {
//         this.values = [];
//     }
//     *[Symbol.iterator]() {
//         yield* this.values;
//     }
// }

// let collection = new Collection();
// collection.values.push(1);
// collection.values.push(2);
// for (let value of collection) {
//     console.log(value)
// }


// Instant vs Static Method
// class Calculate{
//     constructor() { }
//     add(val1, val2) {
//         console.log(val1 + val2);
//     }
//     static area(height, width) {
//         return (height * width);
//     }
// }
// console.log(Calculate.area(3, 5));


// Inheritance


// class Person {
//     constructor(strength, speed, intelligence) {
//         this.strength = strength;
//         this.speed = speed;
//         this.intelligence = intelligence;
//     }
// }

// class Wrastler extends Person {
//     constructor(strength, speed, intelligence, gappling, takedowns) {
//         super(strength, speed, intelligence);
//         this.gappling = gappling;
//         this.takedowns = takedowns;
//     }

// }
// console.log(new Wrastler(54, 65,84,34,98));

// Shadow Methods
// class Rectangle {
//     constructor(length, width) {
//         this.length = length;
//         this.width = width;
//     }
//     getArea() {
//         console.log(this.length * this.width);
//     }
//     static create(length, width) {
//         return new Rectangle(length, width);
//     }
// }

// Inherited Methods
// class Square extends Rectangle {
//     // constructor(length, width) {
//     //     super(length, width);
//     // }
//     getArea() {
//         console.log(`The area is: ${this.length * this.width}`);
//     }

// }

// const square = new Square(4, 5);
// const rectangle = Square.create(4,5);
// console.log(rectangle);
// square.getArea();
// console.log(square);

// Derived Calsses from Expressions

// function Rectangle(length, width) {
//     this.length = length;
//     this.width = width;
// }

// Rectangle.prototype.getArea = function () {
//     console.log(this.length * this.width);
// }
// // Dynamic Class Bases
// function getBase() {
//     return Rectangle;
// }

// class Square extends getBase() {
//     constructor(length) {
//         super(length, length);
//     }
// }

// const square = new Square(5);
// console.log(square)


//  Inheriting from Built-ins

// class MyArray extends Array {
    
// }
// const arr = new MyArray;
// arr[0] = 1;
// console.log(arr[0]);
// console.log(arr.length);
// arr.length = 0;
// console.log(arr[0]);


// Returning Instances
// Symbol.species

// Symbol.species - Used to define a static accessor property that returns a function

/**
 * Array
 * ArrayBuffer
 * Map
 * Promise
 * RexExp
 * Set
 * Typed Array
*/

// class MyArray extends Array {
//     //Empty
// }

// let arr = new MyArray(1, 2, 3, 4, 5);
// let arr2 = arr.splice(1, 4);
// console.log(arr instanceof Array);
// console.log(arr2 instanceof Array);


// Defining Symbol.species

// class MyClass {
//     static get [Symbol.species]() {
//         return this;
//     }
//     constructor(value) {
//         this.value = value;
//     }
//     clone() {
//         return new this.constructor[Symbol.species](this.value); // this.constructor[Symbol.species] = returns class itself.
//     }
// }

// class DerivedClass1 extends MyClass {

// }

// class DerivedClass2 extends MyClass {
//     static get [Symbol.species]() {
//         return MyClass;
//     }
// }

// let instance1 = new DerivedClass1(1);
// let instance2 = new DerivedClass2(2);
// let clone1 = instance1.clone();
// let clone2 = instance2.clone();
// console.log(clone1 instanceof DerivedClass1);
// console.log(instance1 instanceof DerivedClass1);
// console.log(clone2 instanceof DerivedClass2);
// console.log(instance2 instanceof DerivedClass2);


// class MyArray extends Array {
//     static get [Symbol.species]() {
//         return Array;
//     }
// }

// let arr = new MyArray(1, 2, 3, 4, 5);
// let arr2 = arr.splice(1, 4);
// console.log(arr instanceof MyArray);
// console.log(arr2 instanceof MyArray);


// new.target

// Abstract Classes
class Rectangle {
    constructor(length, width) {
        if (new.target === Rectangle) {
            throw new Error("Rectangle can not be instaniated directly");
        }
        this.length = length;
        this.width = width;
    }
}

// let rect = new Rectangle(4, 5);

class Square extends Rectangle {
    constructor(length) {
        super(length, length);
        this.length = length;
    }
}

let sqr = new Square(5);