//normal
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: 'nithu',
    lastName: 'pandi'
};
console.log(getFullName(person));
function getName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var name1 = {
    firstName: 'nith',
    lastName: 'abi'
};
console.log(getName(name1));
function get_FullName(person) {
    if (person.middleName) {
        return "".concat(person.firstName, " ").concat(person.middleName, " ").concat(person.lastName);
    }
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var name2 = {
    firstName: 'Jane',
    lastName: 'Doe',
};
console.log(get_FullName(name2));
