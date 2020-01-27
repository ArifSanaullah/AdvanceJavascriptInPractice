// const example = {
//     save: true,
//     reload: true,
// }

// let save = false,
//     reload = false;

// // let save = example.save,
// //     reload = example.reload;

// // let { save, reload } = example;
// // console.log(save, reload);

// // Destructuring Assignment

// ({ save, reload } = example);
// console.log(save, reload);

// Default values

// const obj = {
//   name: "foo",
//   id: "Beeeeest"
// };

// let { name, id, age = true } = obj;
// console.log(name, id, age);

// Assigning different var names

// const drink = {
//   temp: "Hot",
//   taste: "Bitter",
//   name: "coffee"
// };

// let {
//   temp: localTemp,
//   taste: localTaste,
//   name: localName,
//   flavorRating: localRating = 9
// } = drink;

// console.log(localTemp, localTaste, localName, localRating);

// Nested destructuring

// const user = {
//     name: "Johnny",
//     age: 34,
//     bestFriend: {
//         name: "Mack",
//         age: 33,
//         tempremant: "docile",
//     }
// }

// let { bestFriend: {tempremant: localTemprament} } = user;

// console.log(localTemprament);
if ("") {
    console.log("hi");
} else {
    console.log("hello");
}
// Array destructuring

// let friends = ["John", "Mike", "Jord"];

// let [firstF, , thirdF] = friends;

// console.log(firstF,thirdF)

// Array destructuring assignment

// let colors = ["red", "green", "blue"];

// let firstC = "purple",
//     secondC = "grey";

// [firstC, secondC] = colors;
// console.log(firstC, secondC);

// Value swapping

// ES5

// let a = 1,
//   b = 2;
// console.log(a, b);
// let temp = b;
// b = a;
// a = temp;
// console.log(a, b);

// ES6
// let c = 3,
//   d = 4;
// console.log(c, d);
// [d, c] = [c, d];
// console.log(c, d);

// Default values
// let colors = ["red"];
// [firstC, secondC = "greeen"] = colors;
// console.log(firstC, secondC);

// let colors = ["red", ['skyblue', "dodgerblue", "lightblue"], "green"];

// [firstC, [secondC, , thirdC], fourthC] = colors;

// console.log(firstC, secondC, thirdC, fourthC);

// Rest parameter
// let colors = ["red", "Green", "Blue"];

// let [...colors2] = colors;

// console.log(colors2);

// Destructuring arrays and objects at once(mixing)

// let user = {
//   name: "John",
//   age: 34,
//   favColors: ["Red", "Green", "Blue"],
//   bestFriend: {
//     name: "Malcolm",
//     temperament: "Chill"
//   }
// };

// let {
//   name: localName,
//   favColors: [, secondC],
//   bestFriend: { temperament: localTemperament }
// } = user;

// console.log(localName, secondC, localTemperament);


// Destructuring Parameteres

// function setCookie(name, value,
//     { secure = true, domain, path="/foo", expires=5000 } = { }) {
//     // options = options || {};

//     // let secure = options.secure,
//     //     domain = options.domain,
//     //     path = options.path,
//     //     expires = options.expires;
    
//     // Code to set cookie
//     console.log(secure, domain, path, expires)
// }

// setCookie("type", "JS", { domain: "www.foo.com" })


