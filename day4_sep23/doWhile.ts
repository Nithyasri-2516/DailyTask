let pi = 0;
do {
    console.log(pi);
    pi++;
} while (pi < 10);

//perform odd and even using do-while

let i = 1;
let odd = 0, even = 0;

do {
    if (i % 2 === 0) {
        even += 1;
    } else {
        odd += 1;
    }
    i++;
} while (i <= 10);

console.log("Total odd numbers: " + odd);
console.log("Total even numbers: " + even);
