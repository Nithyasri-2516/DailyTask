//Basic Type Inference
var counter = 42;
var greeting = "Hello, world!";
console.log(counter);
console.log(greeting);
//Function Parameters and Return Types
function multiply(x, y) {
    return x * y;
}
var result = multiply(5, 10);
//Best Common Type Algorithm
var items = [1, 2, 3, null];
var mixedArray = [0, "Hello", true];
console.log(items);
console.log(mixedArray);
var person1 = {
    name: "Bob",
    age: 25,
    hobbies: ["reading", "gaming"]
};
console.log(typeof person1[0]);
