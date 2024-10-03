// Parent class creation 
class Person { 
	public name: string; 
} 

// Interface extended from the above class 
interface Details extends Person { 
	details(): void; 
} 

// Using the above illustrated interface and class together 
class Person_Details extends Person implements Details { 
	details(): void { 
		this.name = "nithuuuuu"; 
		console.log(this.name); 
	} 
} 

let object = new Person_Details(); 
object.details();
