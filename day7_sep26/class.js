//structure of class
var Employee = /** @class */ (function () {
    function Employee() {
        this.name = "pandi";
    }
    return Employee;
}());
var employee = new Employee();
employee.name = "nithya";
console.log(employee);
//exmaple
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
var person = new Person('nithu', 'pandi'); //object
console.log(person.getFullName());
