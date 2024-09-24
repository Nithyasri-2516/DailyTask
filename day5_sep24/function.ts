//1.named function

// function- zero parameter
function info(){
    console.log("hello!!!!!"); 
}

//function- parameter and argument passing 

function add(a:number, b:number){
    console.log(a+b); 
}
add(30,45);  //call by value

function calculate(a:number, b:number, c:number):number{
    return a+b-c;
}
let res:number= calculate(40,34,20);
console.log(res);



//A function type has two parts: parameters and return type

function userActive(userName: string): boolean{  
    if(userName==='nithya'){
         return true;
    }
    else if(userName==='pandi'){
         return false;
    }
    else{
        console.log("user name false"+userName);
        
        return false;
    }
}
if (userActive('nithya')){
    console.log("nithya "); 
}

//2.Anonymous function- without function name- storing function in a variable

let a= function(){
    console.log("I am nithu");
    ;
}
a();

let addition= function(a:number,b:number) :number{
  return a+b;
}
let result= addition(90,89);
console.log(result);


function echo(message: string): void {
    console.log(message.toUpperCase());
}
let r= echo("nithu");


/*
function echo1(message: string): void {
    return message.toUpperCase();
}
let r1= echo1("nithu");

*/

