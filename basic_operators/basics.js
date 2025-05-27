// These are the basic arithmatic operators. (they also function the same way in mathematics like PEMDAS)
var add = 1 + 1; 
var minus = 3 - 2;
var mult = 2 * 5;
var div = 10 / 2;
var rem = 10 % 3;
var expo = 2 ** 3; 
var incr = 5;
incr++;
var decr = 5;
decr--;

console.log(`Addition or sum: ${add}`);
console.log(`Subtraction or minus: ${minus}`);
console.log(`Multiplication or times: ${mult}`);
console.log(`Division or divide: ${div}`);
console.log(`Remainder or modulo: ${rem}`);
console.log(`Exponents: ${expo}`);
console.log(`Increment: ${incr}`);
console.log(`Decrement: ${decr}`);

// Basic comparison operations (lets use if statements)
var var1 = 1;
var var2 = 1;
var var3 = '1';
var var4 = 2;

console.log(`is 1 equal to 1 ?: ${var1 == var2}`);
console.log(`is 1 equal to '1' ? : ${var1 == var3}`);
console.log(`is 1 not equal to 1 ? : ${var1 != var2}`);
console.log(`is 1 not equal to 2 ? : ${var1 != var4}`);
console.log(`is 2 greater than 1 ? : ${var4 > var1}`);
console.log(`is 1 greater than or equal to 1 ? : ${var1 >= var2}`);
console.log(`is 1 lesser than 2 ? : ${var1 < var4}`);

// strict equals to
console.log(`is 1 strict equal to 1?: ${var1 === var2}`);
console.log(`is 1 strict equal to '1': ${var1 === var3}`);
console.log(`is 1 strict not equal to 1?: ${var1 !== var2}`);
console.log(`is 1 strict no equal to 2?: ${var1 !== var4}`);

// logical operators
console.log(`True and True: ${true && true}`);
console.log(`True and False: ${true && false}`);
console.log(`True OR false ${true || false}`);
console.log(`False or False ${false || false}`);
console.log(`True and NOT true ${true && !true}`);

// asignment operators
var newVar1 = 10;
newVar1 += 5;
console.log(`newVar1 + 5 = ${newVar1}`);
newVar1 -= 5;
console.log(`newVar1 - 5 = ${newVar1}`);
newVar1 *= 2;
console.log(`newVar1 * 2 = ${newVar1}`);
newVar1 /=2;
console.log(`newVar1 / 2 = ${newVar1}`);
newVar1 %= 3;
console.log(`newVar1 % 3 = ${newVar1}`);

// conditional operator (ternary operator)
var newVar2 = myCondition ? "If True" : "If False"
