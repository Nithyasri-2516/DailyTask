function information(name, age) {
    return name + " " + age;
}
console.log(information("nithya", 90));
console.log(information("nithya"));
function add(n, p, k) {
    return n + p;
}
console.log(add(10, 89, 90));
//default parameter
function inf(name, age) {
    if (age === void 0) { age = 40; }
    return name + " " + age;
}
console.log(inf("nithya"));
function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(applyDiscount(90));
