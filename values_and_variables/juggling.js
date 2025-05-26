
// change up the values without losing var1 
var var1 = 20;
var var2 = 30;
var var3 = 10;

console.log('Original Values')
console.log(`var1: ${var1}, var2:${var2}, var3:${var3}`);

// use a temp variables so that we don't lose initial value 
var temp = var1; 

var1 = var3; 
var3 = var2; 
var2 = temp; 