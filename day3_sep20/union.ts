let value: string | number;
value = "Hello"; 
value = 42;   
console.log(value);
  

function printValue(value: string | number): void {
    if (typeof value === 'string') {
        console.log(`String value: ${value}`);
    } else {
        console.log(`Number value: ${value}`);
    }
}
printValue("Hello, world!"); 
printValue(100);


function add(a: any, b: any) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add(20,90));
console.log(add("nithu","pandi"));
console.log(add(90,"nithya"));



