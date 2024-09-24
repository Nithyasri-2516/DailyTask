var pending1;
pending1 = false;
pending1 = true;
console.log(pending1); //bool
var result;
var pending = true;
console.log(pending);
var notPending = !pending;
console.log(notPending);
console.log(result);
var hasError = false;
var completed = true;
result = completed && hasError;
console.log(result);
result = completed || hasError;
console.log(result);
