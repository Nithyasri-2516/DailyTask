// for loop
for (var i = 1; i <= 10; i++) {
    console.log(i);
    //break;
}
for (var j = 0; j <= 10; j = j + 2) {
    console.log(j);
}
//for-of
var num1 = [10, 90, 900, 9900];
for (var _i = 0, num1_1 = num1; _i < num1_1.length; _i++) {
    var n = num1_1[_i];
    console.log(n);
    if (n === 900) {
        console.log("hi nithya");
        break;
    }
}
for (var i in num1) {
    console.log(i);
}
