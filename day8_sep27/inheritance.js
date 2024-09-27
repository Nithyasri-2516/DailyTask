var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//inheritance
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.honk = function () {
        console.log("Vehicle Honks");
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.display = function () {
        console.log("This is a Car");
    };
    return Car;
}(Vehicle));
var car = new Car();
car.honk();
car.display();
//another example
var person = /** @class */ (function () {
    //age: number;
    function person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        //this.age=age;
    }
    person.prototype.getId = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return person;
}());
var Person = new person("nithya", "pandi");
// console.log(Person.getId());
var x = /** @class */ (function (_super) {
    __extends(x, _super);
    function x(firstName, lastName, age) {
        return _super.call(this, firstName, lastName) || this;
    }
    x.prototype.display = function () {
        console.log(_super.prototype.getId.call(this));
        console.log("".concat(this.age));
    };
    return x;
}(person));
var X = new x("nithya", "pandi", 20);
X.display();
