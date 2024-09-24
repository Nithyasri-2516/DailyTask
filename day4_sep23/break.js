var num1 = [10, 90, 900, 9900];
for (var _i = 0, num1_1 = num1; _i < num1_1.length; _i++) {
    var n = num1_1[_i];
    console.log(n);
    if (n === 900) {
        console.log("hi nithya");
        break;
    }
}
var products = [{ name: 'phone', price: 700 }, { name: 'tablet', price: 900 }, { name: 'laptop', price: 1200 }];
var discount = 0;
var product = products[1];
switch (product.name) {
    case 'phone':
        discount = 5;
        break;
    case 'tablet':
        discount = 10;
        break;
    case 'laptop':
        discount = 15;
        break;
}
console.log("There is a ".concat(discount, "% on ").concat(product.name, "."));
