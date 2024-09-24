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

for(let i=0;i<5;i++){
    if(i===3){
        continue;
    }
    console.log(i);
    
}

console.log("--------------------------");

for (let index = 0; index < 9; index++) {
    
   if (index % 2==0)
        continue;

    console.log(index);
}
