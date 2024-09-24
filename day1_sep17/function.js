;
function getProduct(id) {
    return {
        id: id,
        name: "Awesome Gadget ".concat(id),
        price: 99.5
    };
}
var showProduct = function (_a) {
    var name = _a.name, price = _a.price;
    console.log("The product ".concat(name, " costs $").concat(price, "."));
};
var product = getProduct(1);
showProduct({ name: product.name, price: product.price });
