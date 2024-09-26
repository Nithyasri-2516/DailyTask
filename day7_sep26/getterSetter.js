//getter - get keyword
var Stud = /** @class */ (function () {
    function Stud() {
        this._name = "pandu";
        this._course = "maths";
    }
    Object.defineProperty(Stud.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stud.prototype, "course", {
        get: function () {
            return this._course;
        },
        enumerable: false,
        configurable: true
    });
    return Stud;
}());
var stud = new Stud();
console.log(stud.name);
console.log(stud.course);
//setter- set keyword
var Student = /** @class */ (function () {
    function Student() {
        this._name = "Abi";
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "semester", {
        set: function (thesem) {
            this._semester = thesem;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "course", {
        set: function (thecourse) {
            this._course = thecourse;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var student = new Student();
student.semester = 5;
student.course = "Web Development";
console.log(student.semester);
console.log(student.course);
