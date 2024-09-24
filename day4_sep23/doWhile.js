var pi = 0;
do {
    console.log(pi);
    pi++;
} while (pi < 10);
//perform odd and even using do-while
var i = 1;
var odd = 0, even = 0;
do {
    if (i % 2 === 0) {
        even += 1;
    }
    else {
        odd += 1;
    }
} while (i <= 10);
console.log("Total odd numbers: " + odd);
console.log("Total even numbers: " + even);
