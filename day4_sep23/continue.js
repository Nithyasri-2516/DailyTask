//Continue with a while loop
var i = 1;
while (i <= 5) {
    i++;
    if (i === 3) {
        continue;
    }
    console.log(i);
}
console.log("-------------------------------------");
//Continue with a for loop
for (var i_1 = 0; i_1 < 5; i_1++) {
    if (i_1 === 3) {
        continue;
    }
    console.log(i_1);
}
console.log("--------------------------");
for (var index = 0; index < 9; index++) {
    if (index % 2 == 0)
        continue;
    console.log(index);
}
