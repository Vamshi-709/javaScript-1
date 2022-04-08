var obj ={
    fname : "vamshi",
    lname : "krishna",
    age : 22,
    friend : "Venkey"
}
console.log(obj.fname);  // normal  object  to call data from object

let {  fname, lname,age,friend} = obj; // destructuting object

console.log(fname,friend); // data from destructured object

console.log(fname="krishna",friend); // insted of changre the object value 

console.log(obj);

console.log(`${fname}`);  //templet latters
