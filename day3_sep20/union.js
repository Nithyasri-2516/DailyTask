var value;
value = "Hello";
value = 42;
console.log(value);
function printValue(value) {
    if (typeof value === 'string') {
        console.log("String value: ".concat(value));
    }
    else {
        console.log("Number value: ".concat(value));
    }
}
printValue("Hello, world!");
printValue(100);
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add(20, 90));
console.log(add("nithu", "pandi"));
console.log(add(90, "nithya"));
