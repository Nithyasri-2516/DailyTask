// if implementation
const max1 = 100;
let counter = 100;

if (counter < max1) {
    counter++;
}
console.log(counter);

//if-else

let x:boolean=true;
if(x){
    console.log("pass");
}
else{
    console.log("fail");
    
}

let a:number=20, b=40;
if(a>b){
    console.log("a is grater");  
}
else{
    console.log("b is greater");
}

//eligible for vote or not

let n: number=34;
if(n>18){
console.log("eligible to vote");
}
else{
    console.log("not eligible");
    
}

//odd or even
let n1: number = 90;
let count = 0, max = 0;

for (let i = 0; i < n1; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
        count++;
    } else {
        console.log(i + " is odd");
        max++;
    }
}
console.log("Total even numbers: " + count);
console.log("Total odd numbers: " + max);


//ternary operator
const max2 = 100;
let counter1 = 100;
counter < max2 ? counter1++ : counter1 = 1;
console.log(counter1);


let num=100;
let a1;
a1=num%2==0 ? ("even") :("odd");
console.log(a1);


let itemcount:number=10;
let discount;

if(itemcount>0 && itemcount<=5){
    discount=5; 
}
else if(itemcount>5 && itemcount<=10){
    discount=10;   
}
else if(itemcount>10){
   discount=15;   
}
else {
    throw new Error('The number of items cannot be negative!');
  }
console.log(`the discount is ${discount}%`);
