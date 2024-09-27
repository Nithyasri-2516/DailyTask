//inheritance
class Vehicle{
    honk()
    {
        console.log("Vehicle Honks");
    }
}
class Car extends Vehicle{
    display(){
        console.log("This is a Car");
    }
}
let car = new Car();
car.honk();
car.display();


//another example
class Person {
    constructor(private firstName: string, 
    private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getName(): string {
        return `I am ${this.firstName} ${this.lastName}.`;
    }
}
class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {
        
        super(firstName, lastName);
    }
    displayInfo(): void {
        console.log(super.getName());
        console.log(`My Job title is ${this.jobTitle}`);
    }
}
let employee = new Employee('abi','rami', 'Web Developer');   
employee.displayInfo();
