let skills: string[];
skills = ['Problem Sovling','Software Design','Programming']; //array declaration
console.log(skills);
skills.push('100');
console.log(skills); //push method


let skills1: string[] = [];
skills1[1] = "Problem Solving";
skills1[0] = "Programming";
skills1.push('Software Design');
console.log(skills1);

let a : string[]=["nithu","pandi"];
a[2]="ni";
a[3]="abi";
a[4]="7";
a[5]= "true";
console.log(a);
console.log(typeof(a));  //object
console.log(typeof(a[0])); //string


let skills3 = ['Problem Sovling','Software Design','Programming'];
let skill = skills3[0];
console.log(typeof(skill));  //string

let num=[1,4,6,7];
let n=num[0];
console.log(typeof(n)); //number

let series = [1, 2, 3];
console.log(series.length); //length

let s=["nithya","pandi","kayal","gugan"];
console.log(s.length);  //string length

let s2 = [1, 2, 3];
let double = s2.map(e => e *2); //map
console.log(double);

let scores : (string | number | boolean)[];
scores = ['Programming', 5, 'Software Design', 4,true];  //Storing values of mixed types
console.log(scores);

