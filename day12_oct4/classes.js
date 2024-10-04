var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, I'm ".concat(this.name, " and I'm ").concat(this.age, " years old."));
    };
    return Person;
}());
var person = new Person('Rahul', 22);
console.log(person.name); // Accessing attribute
person.greet(); // Accessing function
