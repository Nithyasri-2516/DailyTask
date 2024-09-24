type Name = string;
let firstName: Name;
let lastName: Name;
firstName = "abi";
lastName = "as";
console.log(firstName);
console.log(lastName);

//object
type Person = {
    name: string;
    age: number;
  };
  
  let person: Person = {
    name: 'John',
    age: 25
  };

console.log(person);

//union
type alphanumeric = string | number | boolean;
let input: alphanumeric;
input = 100; 
input = 'Hi'; 
input = false; 
console.log(input);



//intersection
type Personal = {
    name: string;
    age: number;
  };
type Contact = {
    email: string;
    phone: string;
  };
  
type Candidate = Personal & Contact;
  let candidate: Candidate = {
    name: "nithu",
    age: 25,
    email: "nithu@example.com",
    phone: "904567889"
  };
  console.log(candidate);
  