function sum(a, b) {
    return a * b;
}

var res = sum.call(this, 55, 10);

console.log(res);

// apply method in javascript

const person = {
    firstName: 'Vamshi',
    lastName: 'Krisna'
}
function greet(greeting, message) {
    return `${greeting} ${this.firstName}. ${message}`;
}

// apply method 
let result = greet.apply(person, ['Hello', 'How are you?']);

console.log(result);


//bind method in JavaScript
// object definition
const student1 = {
    name: "Jack",
    grade: "5",
    introduction: function () {
      console.log(this.name + "studies in grade" + this.grade + ".");
    },
  };
  
  // object definition
  const student2 = {
    name: "Jimmy ",
    grade: " 6",
  };
  
  let resl= student1.introduction.bind(student2);
    resl();
  
