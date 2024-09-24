//A rest parameter allows a function to accept zero or more arguments of the specified type. In TypeScript, the rest parameters follow these rules:
// A function has only one rest parameter.
// The rest parameter appear last in the parameter list.
// The type of the rest parameter is an array type.
function average() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) { //10  20  30 60
        var num = numbers_1[_a];
        total += num; // 10+20+30+40=100
    }
    return numbers.length === 0 ? 0 : total / numbers.length; // 120/4=30
}
console.log(average(10, 20, 30, 60));
console.log(average(5, 6));
console.log(average(3));
console.log(average());
//using string
function joinStrings() {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    return strings.join(', ');
}
console.log(joinStrings("rachel", "john", "peter") + " are mathematicians");
console.log(joinStrings("sarah", "joseph") + " are coders");
