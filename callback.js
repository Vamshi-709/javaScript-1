// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}
function callMe() {
    console.log('I am callback function');
}
greet('Vamshi', callMe);

// numbers
function filter(numbers, callback) {
    let results = [];
    for (const number of numbers) {
      if (callback(number)) {
        results.push(number);
      }
    }
    return results;
  }
  
  let numbers = [1, 2, 4, 7, 3, 5, 6];
  
  let oddNumbers = filter(numbers, function (number) {
    return number % 2 != 0;
  });
  
  console.log(oddNumbers);