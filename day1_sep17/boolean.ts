
let pending1: boolean;
pending1 = false;
pending1 = true;
console.log(pending1);  //bool



let result;
const pending: boolean = true; 
console.log(pending);
const notPending = !pending; 
console.log(notPending);

console.log(result); 

const hasError: boolean = false;
const completed: boolean = true;

result = completed && hasError; 
console.log(result); 


result = completed || hasError; 
console.log(result); 
