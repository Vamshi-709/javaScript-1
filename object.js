// var obj ={
//     fname : "vamshi",
//     lname : "krishna",
//     age : 22,
//     friend : "Venkey"
// }
// console.log(obj.fname);  // normal  object  to call data from object

// let {  fname, lname,age,friend} = obj; // destructuting object

// console.log(fname,friend); // data from destructured object

// console.log(fname="krishna",friend); // insted of changre the object value 

// console.log(obj);

// console.log(`${fname}`);  //templet latters

var standardsList = [
    { "Grade": "Math K", "Domain": "Counting & Cardinality" },
    { "Grade": "Math K", "Domain": "Counting & Cardinality" },
    { "Grade": "Math K", "Domain": "Counting & Cardinality" },
    { "Grade": "Math K", "Domain": "Counting & Cardinality" },
    { "Grade": "Math K", "Domain": "Geometry" },
    { "Grade": "Math 1", "Domain": "Counting & Cardinality" },
    { "Grade": "Math 1", "Domain": "Counting & Cardinality" },
    { "Grade": "Math 1", "Domain": "Orders of Operation" },
    { "Grade": "Math 2", "Domain": "Geometry" },
    { "Grade": "Math 2", "Domain": "Geometry" }
];


const res = [...new Set(standardsList.map((item) => JSON.stringify(item)))];

const results = res.map((item) => JSON.parse(item));
console.log(results);


let person = {
    firstName: 'Vamshi',
    lastName: 'Krishna',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};


console.log(person.getFullName());