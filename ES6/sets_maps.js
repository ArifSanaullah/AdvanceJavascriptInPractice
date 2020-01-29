// One type of collections, originally array


// sets ==> similar to an array but can't contain any duplicate
// maps ==> are key value pairs 

// sets ==> are used to simulate the values

// maps ==> are used to check actual information binded to the keys

// let set = Object.create(null); //null is passed s that the newely created object should not have any inhereted prototype
// set.foo = true;

// let map = Object.create(null); //null is passed s that the newely created object should not have any inhereted prototype

// map.foo = "Actual information";

// const key1 = {};
// const key2 = {};

// map[key1] = "key1";
// map[key2] = "key2";
// console.log(map[key1]);


// Sets in ES6

// let set = new Set();

// set.add("5");
// set.add(2);
// set.add("5");
// console.log(set);

// const key1 = {};
// const key2 = {};
// set.add(key1);
// set.add(key2);
// console.log(set);


// Sets Methods and Properties

// let arr = [1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5];
// let arrSet = new Set(arr);
// // console.log(arrSet.has(7));
// console.log(arrSet);

// // arrSet.delete(5);
// // console.log(arrSet);
// arrSet.clear();
// console.log(arrSet);


// Looping through Sets

// || 1. The value from next position in the set.
// || 2. The same value as the first argument.
// || 3. The set from which the value is read.

// forEach

// let arr = [5, 6, 7, 8];
// let arrSet = new Set(arr);
// arrSet.forEach((value, index, set) => {
//     console.log(`${value}, ${index}
//      ${arrSet === set}
//      ____________________`)
// })

// let set = new Set([1, 2]);

// let processor = {
//     output(value){
//         console.log(value);
//     },
//     processor(dataSet) {
//         dataSet.forEach(val => {
//             this.output(val);
//         });
//     }
// }
// processor.processor(set);

// let set = new Set();
// let key1 = {present: true};
// set.add(key1);
// key = null;
// let setArr = [...set][0];
// console.log(setArr);


/*
Weak Sets ==> only store weak object refrence. cannot store primitive values.
    A weak refrence to an object does not prevent garbage collection if it is the only remaining refrence. 
    -- Understanding ES6
*/

// let weakSet = new WeakSet(),
//     key1 = { present: true };
    
// weakSet.add(key1);
// console.log(weakSet.has(key1))
// key1 = null;
// console.log(weakSet.has(key1));


/* 
in a weakset instance, the add() method throws an error when a non-object is passed.(has(), delete() always return false for non-object arguments).
WeakSet's are no iterable therefore cannot be used in for-of loop.
WeakSet do no expose any iterator such keys() and values() methods. So there is no way to programitically determine contents of the weakset.
WeakSet do not have a forEach method.
weakSet do not have a size property.
*/


/*
Map ==> An ordered list of key-value paris.
--- both, key and value can have any data type.
*/

// let map = new Map();
// map.set("name", "Arif");
// map.set(5, "Regular number");
// map.set("5", "str number");
// map.set(true, "Bool");
// map.set({}, "an empty Object")
// console.log(map);


// Map initializing

// let map = new Map([["name", "Arif"], ["age", 34]])
// console.log(map);


// forEach method on Maps

/*
            The Three Arguments
            --------------------
1. The value from the next position in the map.
2. The key for that value.
3. The map from which the value is read.

*/

// let map = new Map([["Name", "Arif"], ['Age', 34]]);
// map.forEach((index, value, passedMap) => {
//     console.log(`${value} ${index}
//     ${map === passedMap}
//     ---------------------`)
// })


// WeakMaps

// - Every key must be an object.

// let weakmap = new WeakMap();
// let element = document.querySelector(".element");
// weakmap.set(element, "Original object");
// console.log(weakmap.get(element));
// element = null;
// console.log(weakmap.get(element));



// let key1 = {},
//     key2 = {},
//     weakMap = new Map([[key1, "First Key"], [key2, "Second Key"]]);
// console.log(weakMap.has(key1));
// console.log(weakMap.get(key1));
// weakMap.delete(key1);
// console.log(weakMap.has(key1));
// console.log(weakMap.get(key1));
