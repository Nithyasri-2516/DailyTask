//optional paramter-interface
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
