class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

const person = new Person('Rahul', 22);
console.log(person.name); // Accessing attribute
person.greet();           // Accessing function
