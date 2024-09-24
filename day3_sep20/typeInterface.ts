//Basic Type Inference

let counter = 42; 
let greeting = "Hello, world!"; 
console.log(counter);
console.log(greeting);



//Function Parameters and Return Types

function multiply(x: number, y: number) {
    return x * y; 
}
const result = multiply(5, 10);


//Best Common Type Algorithm
let items = [1, 2, 3, null]; 
let mixedArray = [0, "Hello", true]; 
console.log(items);
console.log(mixedArray);


// Complex Objects
const person1 = {
    name: "Bob",
    age: 25,
    hobbies: ["reading", "gaming"]
};
console.log(typeof person1);



