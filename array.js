var array =["vamshi","krishna","venkey","someone"];
console.log(array[2]); 

// normal method to get array values

array.push(23)  // push value into array 
console.log(array)

array.pop()   // remove the last value of array
console.log(array)

let arry = [2,4,6,8,10,12]
let result = arry.map(functionName =(element)=>{
        return element*2;
});
console.log(result) // map method return the new array instede of take array

let users =[
    {firstName :"vamshi", lastName: "krishna",age :20},
    {firstName :"venkey", lastName: "tokala",age :20},
    {firstName :"shiva", lastName: "sange",age :20},
]
let userDetails = users.map(myFun =(element)=>{
 return `${element.firstName} ${element.lastName} ${element.age}`
});
<<<<<<< HEAD
console.log(userDetails)

arry.slice(2,4)
console.log(arry) // its return the specfic values in new aray

 array.sort()
console.log(array) // sort method return the reverse values

arry.shift()
console.log(arry) // shift method remove the 1st element

array.unshift("mahesh babu" ,"ntr")
console.log(array) //  
=======
console.log(userDetails) // we can access in objects also 
>>>>>>> 3c7b3dd811efa16b178014cc38ede0e6d340c2df
