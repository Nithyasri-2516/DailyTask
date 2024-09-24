let num1=[10,90,900,9900];
for(let n of num1){
    console.log(n);
    if(n===900){
        console.log("hi nithya");
        break;
    }
}

let products = [{ name: 'phone', price: 700 },{ name: 'tablet', price: 900 },{ name: 'laptop', price: 1200 }];
let discount = 0;
let product = products[1];
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

console.log(`There is a ${discount}% on ${product.name}.`);