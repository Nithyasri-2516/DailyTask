// same function name
// diff  parameter types and return type
//no.of parameter passed are same


function add(a:string,b:string):string;
function add(a:number,b:number):number;
function add(a:boolean,b:boolean):boolean;
function add(a:any,b:any):any{
    return a+b;
}
console.log(add("nithya","pandi"));
console.log(add(90,70));
console.log(add(false,false));



function add1(a: any, b: any): any {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Invalid arguments');
}
console.log(add1(90,90));
//console.log(add1(true,false));


//Function overloading with optional parameters


function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}
console.log(sum(10,40));





