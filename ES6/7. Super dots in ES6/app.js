function deposit(...money) {
    console.log(money)
    let acc = 0;
    for (let amount = 0; amount < money.length; amount++) {
        acc += money[amount];
    }
    return acc;
}

console.log(deposit(2, 4, 6, 99));

let add = [2, 4, 6, 8, 10];
// console.log(...1, 3, 5, 7, 9);
console.log(...add)
// console.log(Math.max(...add));