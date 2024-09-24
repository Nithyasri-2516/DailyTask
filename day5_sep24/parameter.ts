      //optional parameter
      
function information(name:string, age?:number){
    return name+ " " +age;
}
console.log(information("nithya",90));
console.log(information("nithya"));


function add(n:number, p:number, k?: number){
    return n+p;
}
console.log(add(10,89));



//default parameter

function inf(name:string,age:number=40)        
{
   return name+" " +age;
}
console.log(inf("nithya"));



function applyDiscount(price, discount = 0.05) {
    return price * (1 - discount);
}
console.log(applyDiscount(90)); 
