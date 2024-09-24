//1.named function
// function- zero parameter
function info() {
    console.log("hello!!!!!");
}
//function- parameter and argument passing 
function add(a, b) {
    console.log(a + b);
}
add(30, 45); //call by value
function calculate(a, b, c) {
    return a + b - c;
}
var res = calculate(40, 34, 20);
console.log(res);
function userActive(userName) {
    if (userName === 'nithya') {
        return true;
    }
    else if (userName === 'pandi') {
        return false;
    }
    else {
        console.log("user name false" + userName);
        return false;
    }
}
if (userActive('nithya')) {
    console.log("nithya ");
}
//2.Anonymous function- without function name- storing function in a variable
var a = function () {
    console.log("I am nithu");
    ;
};
a();
var addition = function (a, b) {
    return a + b;
};
var result = addition(90, 89);
console.log(result);
function echo(message) {
    console.log(message.toUpperCase());
}
var r = echo("nithu");
