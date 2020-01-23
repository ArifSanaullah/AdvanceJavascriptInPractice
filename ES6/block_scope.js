// Lexical Scope

// Global Scope

// var person = "Arif";
// console.log(person);
// (function () {
//     var person = "Sana";
//     console.log(person);
// }());

// function Check(bool) {
//     if (bool) {
//         var name = "Jessica";
//         console.log(name);
//     } else {
//         console.log("Try again")
//     }
//     console.log(name);
// }
// Check(true)

// if (true) {
//     let firstName = "ArifSana";
// }
// console.log(firstName);

// Redeclaration

// let age = 40;
// {
// let age = 39;

// }
// console.log(age);

// let name = "Arif";
// function foo() {
//     let name = "Abid";
//     if (true) {
//         let name = "Farhan";
//         console.log(name);
//     }
//     console.log(name);
// }
// foo();
// console.log(name);

// var name = "Arif";
// var age = 20;

// const name = "Abid";
// const age = 34;

// const person = {
//     name: "arif",
// }
// person.name = "Abid";

// const arr = [0, 1, 2, 3, 4];
// arr.push(5);
// arr.pop();

// TDZ(Temporal Dead Zone)
//  YOU CAN'T ACCESS VARIABLES BEFORE YOU DECLARE THEM

// console.log(name);

// let name = "Arif";
// console.log(name);

// for (let i = 0; i < 9; i++) {
//     console.log(i);
// }

// console.log(i);
// console.log(i);

// var funcs = [];
// for (var i = 0; i < 9; i++) {
//     funcs.push(function () { console.log(i) });
// }
// funcs.forEach(function (func) {
//     func();
// })

// var funcs = [];
// for (var i = 0; i < 9; i++) {
//     funcs.push((function(value) {
//         return function() {
//             console.log(value);
//         }
//     }(i)))
// }

// funcs.forEach(function(func) {
//     func();
// })

// let funcs = [];
// for (let i = 0; i < 9; i++) {
//   funcs.push(function() {
//     console.log(i);
//   });
// }

// funcs.forEach(function(func) {
//   func();
// });

// let arr = [];
// let obj = { a: "adafdf", b: false, c: 43, };

// for (let key in obj) {
//     arr.push(function(){console.log(key)})
// }
// arr.forEach(function(func){func()})


// let String = "Random keys";

// console.log(window.String);

// console.log(String)


