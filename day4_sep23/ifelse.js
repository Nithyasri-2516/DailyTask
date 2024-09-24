// if implementation
var max1 = 100;
var counter = 100;
if (counter < max1) {
    counter++;
}
console.log(counter);
//if-else
var x = true;
if (x) {
    console.log("pass");
}
else {
    console.log("fail");
}
var a = 20, b = 40;
if (a > b) {
    console.log("a is grater");
}
else {
    console.log("b is greater");
}
//eligible for vote or not
var n = 34;
if (n > 18) {
    console.log("eligible to vote");
}
else {
    console.log("not eligible");
}
//odd or even
var n1 = 90;
var count = 0, max = 0;
for (var i = 0; i < n1; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
        count++;
    }
    else {
        console.log(i + " is odd");
        max++;
    }
}
console.log("Total even numbers: " + count);
console.log("Total odd numbers: " + max);
//ternary operator
var max2 = 100;
var counter1 = 100;
counter < max2 ? counter1++ : counter1 = 1;
console.log(counter1);
var num = 100;
var a1;
a1 = num % 2 == 0 ? ("even") : ("odd");
console.log(a1);
var itemcount = 10;
var discount;
if (itemcount > 0 && itemcount <= 5) {
    discount = 5;
}
else if (itemcount > 5 && itemcount <= 10) {
    discount = 10;
}
else {
    discount = 15;
}
console.log("the discount is ".concat(discount, "%"));
