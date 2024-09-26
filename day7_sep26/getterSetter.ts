//getter - get keyword

class Stud {
	private _name: string = "pandu";
	private _semester: number;
	private _course: string="maths";

	public get name() {
		return this._name;
       
}
public get course()
{
 return  this._course;
}
}

let stud = new Stud();
console.log(stud.name);
console.log(stud.course);


//setter- set keyword

class Student {
	private _name: string = "Abi";
	private _semester: number;
	private _course: string;
	public get name() {
		return this._name;
	}

	public set semester(thesem: number) {
		this._semester = thesem;
	}

	
	public set course(thecourse: string) {
		this._course = thecourse;
	}
}

let student = new Student();

student.semester = 5;
student.course = "Web Development";

console.log(student.semester);
console.log(student.course);
