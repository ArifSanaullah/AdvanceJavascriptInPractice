// Parsing args to Iterators

// function* makeIterator() {
//     let first = yield 1;
//     let second = yield first + 2;
//     yield second + 3;
// }
// // execution stops fter returning a yield even if it is an assognment or expression. As abovee, at the first 1 is yielded and then execution is stopped before the assignment of yield to the variable first.
// // In assignment (yield assignment) execution flows fro right to left.
// let iterator = makeIterator();
// console.log(iterator.next());
// console.log(iterator.next(4));
// console.log(iterator.next(5));
// console.log(iterator.next());


// Throwing Errors


// function* makeIterator() {
//   let first = yield 1;
//     let second;
//     try {
//         second = yield first + 2;
//     } catch {
//         second = 6;
//     }
//   yield second + 3;
// }
// // try block will throw an err and cdoe will jump to catch block. So what we get is second = 6 .

// let iterator = makeIterator();
// console.log(iterator.next());
// console.log(iterator.next(4));
// console.log(iterator.throw(new Error("Stopped!")));
// console.log(iterator.next(5))


// Generator Returns

// The undefined value we get when all the yiled statements are executed is actually returned by the generator function by default. we can change this default value by specifying the return statement.

// function* makeIterator() {
//     yield 1;
//     yield 2;
//     yield 3;
//     return "Final value reached.";
// }
// let iterator = makeIterator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// Delegating Generators

// function* makeColorIterator() {
//     yield "Red";
//     yield "Green";
// }
 
// function* makeNumberIterator() {
//     yield 1;
//     yield 2;
// }
// function* makeCombinedIterator() {
//     yield* makeColorIterator();
//     yield* makeNumberIterator();
//     yield true;

// }

// let iterator = makeCombinedIterator();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// Return

// function* makeIterator() {
//     yield 1;
//     yield 2;
//     return 3;
// }

// function* makeRepeatingIterator(counter) {
//     for (let i = 0; i < counter; i++) {
//         yield "Repeat";
//     }
// }

// function* makeCombinedIterator() {
//     let result = yield* makeIterator();
//     yield* makeRepeatingIterator(result);
//     yield true;

// }

// let iterator = makeCombinedIterator();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// Asynchronous Task Running
// Passing values
// MAde a task runner and used the value gained from yielded function's result in the next call.
function run(defFunc) {
    let call = defFunc();
    let result = call.next();
    console.log(result);
    function step() {
        if (!result.done) {
          result = call.next(result.value);
            console.log(result);
            step();
        }
    }
    step();
}
run(function* () {
    let value = yield 1;
    value = yield value + 2; // storing value of yield so that it can be used in the next call.
    value = yield value + 3;
})