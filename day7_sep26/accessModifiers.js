/*
Access modifiers change the visibility of the properties and methods of a class. TypeScript provides three
access modifiers:

private
protected
public

*/
//private--->access that property or method within the same class. 
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var person = new Person('John', 'Doe');
//console.log(person.firstName);         error....
//public modifier--->allows class properties and methods to be accessible from all locations.
var emp = /** @class */ (function () {
    function emp(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    emp.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return emp;
}());
var Emp = new emp('abi', 'rami');
console.log(Emp.firstName);
