let result: any;

result = 1;
console.log(result);

result = 'Hello';
console.log(result);


result = [1, 2, 3];
const total = result.reduce((a: number, b: number) => a + b, 1 );
console.log(total);

/*The Array.reduce() method in TypeScript is used to reduce an array
 to a single value by applying a callback function to each element of the array. 

 array.reduce(callback[, initialValue])
*/


const json = `{"latitude": 11.24, "longitude":12.12}`;
const currentLocation = JSON.parse(json);
console.log(currentLocation);


console.log(currentLocation.latitude);
console.log(currentLocation.x); // undefined


let result1: any;
result1= 10.123;
console.log(result1.toFixed());

// result.willExist(); 


/*
let resul: object;
resul = 10;
resul.toFixed();
*/