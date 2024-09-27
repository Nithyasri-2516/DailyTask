abstract class Employee {
    constructor(private firstName: string, private lastName: string) {}
    abstract getSalary(): number;
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement(): string {
      return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
  }



abstract class Animal {
    abstract makeSound(): void;

    move(): void {
        console.log("Moving...");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Bark!");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meow!");
    }
}

const dog = new Dog();
dog.makeSound();
dog.move();

const cat = new Cat();
cat.makeSound();
cat.move();
