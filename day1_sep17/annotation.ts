
let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
console.log(names); // array annotation

var person: {
    name: string;  
    age: number;
  };
person = { name: 'John',age: 25,}; // object   
console.log(person);



let greeting: (name: string) => string;
greeting = function (name: string) {
    return `Hi ${name}`;
};
console.log(greeting("Alice"));   //greeting function with a name argument
