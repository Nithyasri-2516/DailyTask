// Parent class declaration 
class Student { 
	public id: number; 
	public name: string; 
} 

// Creating multiple interfaces which 
// will extend the above class 
interface Student_1 extends Student { 
	student1_details(): void; 
} 

interface Student_2 extends Student { 
	student2_details(): void; 
} 

// Creating a class which will extend 
// the above interfaces 
class Student_Details extends Student implements Student_1, Student_2 { 
	student1_details(): void { 
		this.name = "Apple"; 
		this.id = 1; 
		console.log(this.id + " - " + this.name); 
	} 

	student2_details(): void { 
		this.name = "Banana"; 
		this.id = 2; 
		console.log(this.id + " - " + this.name); 
	} 
} 

let student_object = new Student_Details(); 
student_object.student1_details(); 
student_object.student2_details();
