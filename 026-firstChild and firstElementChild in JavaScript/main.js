// Module Pattern

//IIFE (Immediatly Invoked Function Expression)

var counter = (function() {
  //private stuff not accessable outside of the function
  let count = 0;

  function print(message) {
    console.log(message + "---" + count);
  }

  //return an object to counter
  return {
    //value: count,   //Can not get value back because a closure is created

    //need to setup get and set functions
    get: function() {
      return count;
    },

    set: function(value) {
      count = value;
    },

    increment: function() {
      count += 1;
      print("After Increment: ");
    },

    reset: function() {
      print("Before reset: ");
      count = 0;
      print("After Reset: ");
    }
  };
})();

// console.log(counter.count);  //can not do. can not access private member

// console.log(counter.value);

console.log("\nCounter initialized to: " + counter.get() + "\n");

counter.increment();
counter.increment();
counter.increment();

//value comes back 0 when it looks like it should be 3
//Accidentally created a closure
// console.log(counter.value);

counter.set(7);
console.log("\nNow set counter to: " + counter.get() + "\n");
counter.reset();
console.log("\nCounter has been reset to: " + counter.get() + "\n");
