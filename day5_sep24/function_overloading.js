// same function name
// diff  parameter types and return type
//no.of parameter passed are same
function add(a, b) {
    return a + b;
}
console.log(add("nithya", "pandi"));
console.log(add(90, 70));
console.log(add(false, false));
function add1(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Invalid arguments');
}
console.log(add1(90, 90));
function sum(a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
}
console.log(sum(10, 40));
