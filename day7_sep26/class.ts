//structure of class
class Employee{
    name: string;
}
const employee=new Employee(); //instance 
employee.name="nithya";
console.log(employee);

//exmaple

class Person {  //class
  
    firstName:string;
    lastName:string;
    
    constructor(firstName, lastName) {  //constructor
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {  //method
        return `${this.firstName} ${this.lastName}`;
    }
}

let person = new Person('nithu','pandi');  //object
console.log(person.getFullName()); //method calling  