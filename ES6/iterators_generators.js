/*

Iterators - objects with an interface designd for iteration
Iterator objects have a next() method.
next() method returns a result object.
the result object has two properties:
    i. value, which is the next value
    ii. and done, which is boolean that's true when there are no more values to return.
Generators - A function that returns an iterator/

*/

// Generator function

// function* makeIterator() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
// let iterator = makeIterator();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().done);

// function* makeIterator(items) {
//     for (let i in items) {
//         yield items[i];
//     };
// }
// let iteration = makeIterator([1, 2, 3]);

// console.log(iteration.next().value);
// console.log(iteration.next().value);
// console.log(iteration.next().value);
// console.log(iteration.next().done);


// function* makeIterator(items) { // this function declaration will throw an error saying unexpected identifier becaouse yield can be used just in a generator function. In ither words yield must be in the direct scope of generator function
//     items.forEach(item => {
//         yield item;
//     });
// }

// Make generator function with expression. however we cannot create a generator function using arrow function.
// let makeIterator = function* (items) {
//     for (let i in items) {
//         yield items[i];
//     }
// }
// let iteration = makeIterator([1, 2, 3]);

// console.log(iteration.next().value);
// console.log(iteration.next().value);
// console.log(iteration.next().value);
// console.log(iteration.next().done);


// Generator Methods

// let obj = {
//     *makeIterator(items) {
//         for (let i in items) {
//             yield items[i];
//         }
//     }
// }
// console.log(obj.makeIterator([1,2,3]))


// For-of Loop

/*

Iterable - object with a symbol.iterator property
Symbol.iterator - specifies a function that returns an iterator for the object

Arrays, sets, maps, as well as stringa

*/

// for of loop

// let names = ["Arif", "Abid", "Farhan", "Salman"];
// for (let name of names) { // behind the scenes of a for-of loop there is a result method (iterator) that loops through the values of array until the done property of ierator object(array) is true
//     console.log(name)
// }


// Symbol.iterator

// let drinks = ["coffee", "milk", "tea"];

// let iterator = drinks[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next().done);

// function isIterable(obj) {
//     return typeof obj[Symbol.iterator] === "function";
// }

// console.log(isIterable([1, 2, 3]));
// console.log(isIterable(new Map()));
// console.log(isIterable(new Set()));
// console.log(isIterable(new WeakSet()));
// console.log(isIterable(new WeakMap()));
// console.log(isIterable(new Object()));


// Making your own iterables

// let collection = {
//     items: [1, 2, 3],
//     *[Symbol.iterator]() {
//         for (let item of this.items) {
//             yield item;
//         }
//     }
// }

// console.log(collection[Symbol.iterator]().next())
// console.log(collection[Symbol.iterator]().next())
// console.log(collection[Symbol.iterator]().next())
// console.log(collection[Symbol.iterator]().next().done);
// console.log(collection[Symbol.iterator]().next().done);

// for (let val of collection) {
//     console.log(val)
// }


// Built-in Iterators

/*
 * entries() ==> returns an iterable whose values are key-value pairs.
 * values() ==> returns an iterable whose values are values of the collection
 * keys() ==> returns an iterable whose values are keys of the collection
 */

// let colors = ["Red", 'Green', "Blue"];
// let tracking = new Set([23, 54, 67, 23, 87]);
// let map = new Map();
// map.set("name", "Arif");
// map.set("age", 43);

// for (let entry of colors.entries()) {
//     console.log(entry);
// }
// for (let entry of tracking.values()) {
//     console.log(entry);
// }
// for (let entry of map.keys()) {
//     console.log(entry);
// }
// for (let entry of colors) {
//     console.log(entry);
// }
// for (let entry of tracking) {
//     console.log(entry);
// }
// for (let entry of map) {
//     console.log(entry);
// }
// for (let [key, value] of map) {
//     console.log(`${key}, ${value}`)
// }" 熊"

// let string = "ab熊c";
// for (var i = 0; i < string.length; i++) {
//     console.log(string[i]);
// }

// let divList = document.querySelectorAll("div");
// console.log(divList)
// for (let div of divList) {
//     console.log(div);
// }

// let set = new Set([1, 2, 3]);
// let arr = [...set];
// console.log(arr);

// let map = new Map([["name", "Arif"], ["age", 23]]);
// let arr2 = [...map];
// console.log(arr2);

// let bigNums = [333, 453, 236, 876, 4444, 2342],
//     smallNums = [23, 54, 23, 76, 85];
// let bigArr = [0, ...bigNums, 43,2,6, ...smallNums];
// console.log(bigArr);