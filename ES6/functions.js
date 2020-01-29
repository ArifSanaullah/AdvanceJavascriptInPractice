// function foo(first, second = "e") {
//   // 'use strict';
//   console.log(arguments);
//   console.log(first === arguments[0]);
//   console.log(second === arguments[1]);
//   first = "c";
//   //     second = "d";
//   console.log(arguments);
//   console.log(first === arguments[0]);
//   console.log(second === arguments[1]);
// }
// foo("a");

// let value = 5;
// function foo(params) {
//     return value + params;
// }

// function bar(first, second = foo(first)) {
//     console.log(`${first}, ${second}`)
// }

// bar(4);
// bar(4);
// bar(4);

// TDZ

function foo(first, second=first) {
    console.log(first, second);
}
foo(4)

function bar(first=second, second) {
  console.log(first, second);
}
bar(4);

// write a function getting two
// function pick(object, ...keys) {
//     let result = Object.create(null);

//     for (let i = 0; i < keys.length; i++) {
//         result[keys[i]] = object[keys[i]];
//     }
//     return result;
// }

// let book = {
//     author: "XYZ",
//     title: "ABC",
//     year: "****",
// }
// console.log(pick(book, "author","title", "year"));

// function checkArgs(...args) {
//     console.log(arguments);
//     console.log(args);
//     console.log(arguments[0], args[0]);
//     console.log(arguments[1], args[1]);
// }

// checkArgs("a", "b");

// let add = new Function("...args", "return args;");
// console.log(add(2, 3,4,5,6,77));

// let num1 = 50;
// let num2 = 40;
// let numArr = [1,2,3,4,5,6,7,8]
// console.log(Math.max(...numArr));

// function doSomething() {}
// let doSomethingElse = function () { }
// console.log(doSomething.name);
// console.log(doSomethingElse.name);

// function doSomething() { }
// console.log(doSomething.bind().name);
// console.log(new Function().name)

// function Person(name) {
//     if (typeof new.target !== "undefined") {
//         this.name = name;
//     } else {
//         throw new Error("Should be called with new");
//     }
// }

// const person = new Person("Jannet");
// const notPerson = Person("Zag");
// const newNotPerson = Person.call(person, "Jade");
// console.log(person, newNotPerson);

// "use strict";
// if (true) {
//   function foo() {
//     console.log("foo");
//   }
//     foo()
// }
// foo()


// Arrow Functions

// no this, super arguments bind or new.target

// cannot be called with new

// no prototype

// Can't change this

// no arguments object

// no duplicate name parameters

// let multiplyByFive = val1 => val1 * 5;
// console.log(multiplyByFive(5));


// let nums = [3, 4, 5, 6];
// nums.forEach((val, i, nums) => {
//     console.log(val,i,nums)
// })

let obj = {
    msg: (name) => 
        "hello " + name
}
console.log(obj.msg("Arif"))

// function makeArrowFunctionReturnArgs() {
//     return () => arguments[0];
// }

// let add = makeArrowFunctionReturnArgs(5);
// console.log(add())


// Tail Call Optimization
/*
1. The tail call does not require access to variables in current stack frame(meaning function is not a closure)

2. The making the tail call has no further work to do after tail call returns.

3. The result of the tail call is returned as a function value.
*/
"use strict"
function doSomething() {
    return doSomethingElse();
} //valid syntax

// function doSomething() {
//   return 1 + doSomethingElse();
// } // rule 2. Woking after return 

// function doSomething() {
//     let result = doSomethingElse();
//   return result;
// } //rule 3. Inavlid syntax

// function doSomething() {
//   doSomethingElse();
// }//not returning anything.rule 2. Inavlid syntax
// function doSomething() {
//     let num = 4;
//     let doSomethingElse = () => num
//     return doSomethingElse();
// } //closure occured.Inavalid decalartion.

// doSomething();
// function doSomethingElse() {
//     console.log("doSeomthingelse")
//     return "doSomeThingElse";
// }

// (() => {
//     console.log("Hello world!")
// })();

// let gendre = "female";
// gendre === "male"
//     ? console.log("true")
//     : gendre === "female"
//         ? console.log("female")t
//         : console.log("other than all");
 // function factorial(n) {
//     if (n <= 1) {
//         return 1;
//     } else {
//         // not optimized. must multiply after returning
//         return n * factorial(n - 1);
//     }
// }
// // console.log(factorial(3));

// function improvedFactorial(n, p=1) {
//     if (n <= 1) {
//         return n * p;
//     } else {
//         console.log(n, p);
//         let result = n * p;
//         // optimized
//         return improvedFactorial(n - 1, result);
//     }
// }

// console.log(improvedFactorial(5));