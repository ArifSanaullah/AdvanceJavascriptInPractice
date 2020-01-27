// let arr1 = new Array(1, 2, 3, 4),
//     arr2 = new Array(5),
//     arr3 = new Array("3");

// console.log(arr1);
// console.log(arr1.length);
// console.log(arr1[0]);
// console.log(arr2[0]);
// console.log(arr2.length);

// Old Transforming
// let arr1 = Array.of(1, 2, 3, 4),
//   arr2 = Array.of(5),
//   arr3 = Array.of("3");

// console.log(arr1);
// console.log(arr1.length);
// console.log(arr1[0]);
// console.log(arr2[0]);
// console.log(arr2.length);

// function turnIntoArray(obj) {
//   return Array.from(arguments, (value) => value*2);
// }

// let arr4 = turnIntoArray(3, 4, 5, 6);
// console.log(arr4);

// Arrays from Iterables
// const set = new Set([1, 2, 3]);
// console.log(set);
// let arr = Array.from(set, value => value * 2);
// console.log(arr);
// let obj = {
//   *[Symbol.iterator]() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
// };
// let arr2 = Array.from(obj, value => value + 1);
// console.log(arr2);

// find and findIndex

let nums = ['01','02','03','04',"05","06","07"];
// find() takes a callback function as an argument and returns condition for the found element. e.g./
// let result = nums.find((n, i, a) => {
//     return n > 100;
// })
// console.log(result);

// fill(itemToReplaceWith, startIndex, endIndex)
// console.log(nums.fill("Hi",2, 5))


// copyWithIn(whereToStartPasting, WhereToStartCopying, WhereToEndCopying);
console.log(nums.copyWithin(3, 0, 2));