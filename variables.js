const { number } = require("yargs");

// Var it's a global variable 
var firstName ="Vamshi";
var LastName ="Krishna";
console.log(firstName + LastName) 

// also we can redeclear the variable

var fname ="Venkey"; 
var fname ="Vamshi"; 
console.log(fname)

// let is a block scope variable 
// we can't redecler the value
let name ="sai";
 let name ="vamshi";
console.log(name)
// SyntaxError: Identifier 'name' has already been declared
 // and also we cannot access out side function 

 const functionName =()=>{
    let number = 7
    return (number*number)
 }
 console.log(functionName());
console.log(number) // number is undefined  

//const  value is constent we can't change it
const number1 =23.3
let number1 ="vamshi"
console.log(number1)
//// SyntaxError: Identifier 'name' has already been declare
