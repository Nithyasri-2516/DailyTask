// for loop

for(let i=1;i<=10;i++){
    console.log(i);
    //break;
}

for(let j=0;j<=10;j=j+2){
    console.log(j);   
}

//for-of

let num1=[10,90,900,9900];
for(let n of num1){
    console.log(n);
    if(n===900){
        console.log("hi nithya");
        break;
    }
}

let info="nithupandi";
for(let c of info){
    console.log(c);
    
}


//for -in
for(let i in num1){
    console.log(i);
    
}
