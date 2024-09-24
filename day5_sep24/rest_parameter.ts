//A rest parameter allows a function to accept zero or more arguments of the specified type. In TypeScript, the rest parameters follow these rules:

// A function has only one rest parameter.
// The rest parameter appear last in the parameter list.
// The type of the rest parameter is an array type.

function average(...numbers: number[]): number {
    let total = 0;
    for (let num of numbers) {  //10  20  30 60
        total += num;// 10+20+30+40=100
    }
    return numbers.length === 0 ? 0 : total / numbers.length;  // 120/4=30
}
console.log(average(10, 20, 30, 60));
console.log( average(5, 6));
console.log(average(3));
console.log( average()); 




//using string

function joinStrings(...strings: string[]): string {
    return strings.join(', ');
}
console.log(joinStrings("nithu", "priyu", "mandu") + " are developers");
console.log(joinStrings("pandi", "prem") + " are Medicalcoders"); 
