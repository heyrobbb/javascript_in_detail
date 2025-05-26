// Values and Variables

// all data or chunks of data can be called values.
// you cam make data mutable, or not mutable. 
// you declare a variable with keyword `var` 


// example of declaring a variable with a string value 
var exampleString = "Hello";
console.log(exampleString);

// Integer value
var exampleInteger = 25; 
console.log("var exampleInteger: ", exampleInteger);

// Assigning a value without var (can only be done after creating the initial variable, this is a mutable variable )
var exampleMutable = 50; 
console.log(exampleMutable);

exampleMutable = 100; 
console.log(exampleMutable)

// a const is an immutable variable, the value cannot be changed 
const exampleImmutableVar = 500; 
console.log(exampleImmutableVar);

// you can also delcare variables with `let` and `const`, though JavaScript interprets and defines their scope differently.
let exampleMutableVar = 200;
console.log(exampleMutableVar);
