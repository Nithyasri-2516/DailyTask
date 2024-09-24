var firstName = "nithu";
console.log(typeof firstName);
{
    var name1 = "abi"; //implicit 
    var name2 = "jemi";
}
console.log(name2);
{
    var name2_1 = "nithupandi"; //explicit
    console.log(name2_1);
}
var name3 = "nithya";
var name3 = "33";
console.log(name3);
var names = ['John', 'Jane', 'Peter', 'David', 'Mary'];
console.log(names); // array annotation
var person;
person = { name: 'John', age: 25, }; // object   
console.log(person);
var greeting;
greeting = function (name) {
    return "Hi ".concat(name);
};
console.log(greeting("Alice")); //greeting function with a name argument
{
    greeting = function (name) {
        return "Hello, ".concat(name);
    };
    console.log(greeting("Bob")); // greeting with a different function but still adhering to the type signature
}
var greetWithoutName;
greetWithoutName = function () {
    console.log('Hello');
};
greetWithoutName(); //  If you use a function that takes no parameters (for comparison)
var price = 9.89;
console.log(price); //number-ts\
var counter = 0;
var x = 100, y = 200;
console.log(counter); //decimal
var bin = 4;
var anotherBin = 2; //binary
console.log(bin);
console.log(anotherBin);
var octal = 8;
console.log(octal); //octal
var hexadecimal = 0XA;
console.log(hexadecimal); //hexa
//let big: bigint = 9007199254740991n;
//console.log(big);
var firstName1 = 'John';
var t = "Web Developer";
console.log(firstName1);
console.log(t);
var firstName2 = "John";
var title = "Web Developer";
var profile = "I'm ".concat(firstName2, ". \nI'm a ").concat(title);
console.log(profile); //string 
var pending1;
pending1 = false;
pending1 = true;
console.log(pending1); //bool
var result;
var pending = true;
var notPending = !pending;
console.log(result);
var hasError = false;
var completed = true;
result = completed && hasError;
console.log(result);
result = completed || hasError;
console.log(result);
var employee;
employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
console.log(employee); //object type
var vacant = {};
console.log(vacant.toString());
