/*
Access modifiers change the visibility of the properties and methods of a class. TypeScript provides three 
access modifiers:

private
protected
public

*/

//private--->access that property or method within the same class. 

class Person {
   
    private firstName: string;
    private lastName: string;
  
    constructor( firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    
  }
let person = new Person('John', 'Doe');
//console.log(person.firstName);         error....


//public modifier--->allows class properties and methods to be accessible from all locations.


class emp {
   
    public firstName: string;
    public lastName: string;
  
    constructor( firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    
  }
let Emp = new emp('abi', 'rami');
console.log(Emp.firstName); 


//protected-  modifier allows access within the same class and subclasses.

class employee {
   
    protected firstName: string;
    public lastName: string;
  
    constructor( firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    
  }
  let Emplo = new employee('abi', 'rami');
  //console.log(Emplo.firstName); 
  
 
  
