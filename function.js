
function myFun(number) {
   return  number * 6 // return the value what we want

}
console.log(myFun(3)); // passing arugment insted of calling function


// Arrow function es6 introduce the arrow function  // 
var func =()=>{
   console.log(`hello world`);
}
func();


// clousers  when function return with lexical enavironment 
function outer () {
   let a = 4
   function inner () {
       let b = a + a
       console.log(b);
   }
   return inner
}
let c = outer ()
c()