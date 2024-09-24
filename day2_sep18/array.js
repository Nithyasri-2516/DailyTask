var skills;
skills = ['Problem Sovling', 'Software Design', 'Programming']; //array declaration
console.log(skills);
skills.push('100');
console.log(skills); //push method
var skills1 = [];
skills1[1] = "Problem Solving";
skills1[0] = "Programming";
skills1.push('Software Design');
console.log(skills1);
var a = ["nithu", "pandi"];
a[2] = "ni";
a[3] = "abi";
a[4] = "7";
a[5] = "true";
console.log(a);
console.log(typeof (a)); //object
console.log(typeof (a[0])); //string
var skills3 = ['Problem Sovling', 'Software Design', 'Programming'];
var skill = skills3[0];
console.log(typeof (skill)); //string
var num = [1, 4, 6, 7];
var n = num[0];
console.log(typeof (n)); //number
var series = [1, 2, 3];
console.log(series.length); //length
var s = ["nithya", "pandi", "kayal", "gugan"];
console.log(s.length); //string length
var s2 = [1, 2, 3];
var double = s2.map(function (e) { return e * 2; }); //map
console.log(double);
var scores;
scores = ['Programming', 5, 'Software Design', 4, true]; //Storing values of mixed types
console.log(scores);
