//normal
function getFullName(person: {
    firstName: string;
    lastName: string
}) {
    return `${person.firstName} ${person.lastName}`;
}

let person = {
    firstName: 'nithu',
    lastName: 'pandi'
};

console.log(getFullName(person));


//interface implementation
interface Person {
    firstName: string;
    lastName: string;
}

function getName(person: Person) {
    return `${person.firstName} ${person.lastName}`;
}

let john = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(getName(john));
