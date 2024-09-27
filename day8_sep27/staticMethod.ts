class Employee {
    static headcount: number = 0;
       firstName: string
        lastName: string
        jobTitle: string

    constructor(firstName: string,lastName: string,jobTitle: string) {
        this.firstName= firstName;
        this.lastName=lastName;
        this.jobTitle=jobTitle;

        Employee.headcount++; // while headcount is in static, then this keyword shouldnt used. so we use class  name.
    }
}

let john = new Employee('John', 'Doe', 'Front-end Developer');
let jane = new Employee('Jane', 'Doe', 'Back-end Developer');

console.log(Employee.headcount); 
