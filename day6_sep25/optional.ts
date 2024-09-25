
//optional paramter-interface

interface Person {
    firstName: string;
    middleName?: string;
    lastName: string;
}
function get_FullName(person: Person) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}
let name2 = {
    firstName: 'Jane',
    lastName: 'Doe',   
  };
console.log(get_FullName(name2));
