// STACKS

// functions: push, pop, peek, length

// let letters = [];
// let word = "racecar";
// let rword = "";

// for (let i = 0; i < word.length; i++) {
//     const element = word[i];
//     letters.push(element);
// }

// for (let i = 0; i < word.length; i++) {
//     rword += letters.pop();
// }
// if (rword === word) {
//     console.log(`${word} is a palindrom.`);
// } else {
//     console.log(`${word} is not a palindrom.`);
// }

// SETS

// function mySet() {

//     let collection = [] // will hodl the set
//     this.has = function (element) { // this method will check if element is already in the set or not.
//         return (collection.indexOf(element) !== -1);
//     };

//     this.values = function () { //will return values in the set
//         return collection;
//     };
//     this.add = function (element) {
//         if (!this.has(element)) {
//             collection.push(element);
//             return true;
//         }
//         return false;
//     };
//     this.size = function () { // size of the collection
//         return collection.length;
//     };
//     this.union = function (otherSet) { //union of two sets
//         let unionSet = new mySet();
//         let firstSet = this.values();
//         let secondSet = otherSet.values();

//         firstSet.forEach(e => {
//             unionSet.add(e);
//         });
//         secondSet.forEach(e => {
//             unionSet.add(e);
//         });
//         return unionSet;
//     }

//     this.intersection = function (otherSet) { //intersection of two sets
//         let intersectionSet = new mySet();
//         let firstSet = this.values();
//         let secondSet = otherSet.values();

//         firstSet.forEach(e => {
//             if (otherSet.has(e)) {
//                 intersectionSet.add(e);
//             }
//         });
//         return intersectionSet;
//     };

//     this.difference = function (otherSet) { //difference of two sets
//         let differenceSet = new mySet();
//         let firstSet = this.values();
//         firstSet.forEach(e => {
//             if (!otherSet.has(e)) {
//                 differenceSet.add(e);
//             }
//         });
//         return differenceSet;
//     };

//     this.subset = function (otherSet) { //test if set is a subset of different set.
//         let firstSet = this.values();
//         return firstSet.every(function (e) {
//             return otherSet.has(e);
//         });
//     };
// }

// var setA = new mySet();
// var setB = new mySet();
// setA.add("a");
// setB.add("b");
// setB.add("c");
// setB.add("a");
// setB.add("d");
// console.log(setA.subset(setB));
// console.log(setA.intersection(setB).values());
// console.log(setB.difference(setA).values());



// var setC = new Set();
// var setD = new Set();
// setC.add("a");
// setD.add("b");
// setD.add("c");
// setD.add("a");
// setD.add("d");
// console.log(setD.values());
// setD.delete("a");
// console.log(setD.has("a"));
// console.log(setD.add("d"));

// QUEUE

function Queue() {
    let collection = [];
    this.print = function () {
        console.log(collection);
    };
    this.enqueue = function (element) {
        collection.push(element);
    };
    this.dequeue = function () {
        return collection.shift();
    };
    this.front = function () {
        return collection[0];
    };
    this.size = function () {
        return collection.length;
    };
    this.isEmpty = function () {
        return (collection.length === 0);
    };
}


var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue();
console.log(q.front());
q.print();