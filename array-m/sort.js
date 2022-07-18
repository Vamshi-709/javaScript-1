var Arr = [9,4,6,2,1,5,3,0];

for (var i = 1; i < Arr.length; i++)
    for (var j = 0; j < i; j++)
        if (Arr[i] < Arr[j]) {
          var x = Arr[i];
          Arr[i] = Arr[j];
          Arr[j] = x;
        }

console.log(Arr);

var a = [1,4,2,3,6,7,5,23,18];

a.forEach((item, index) => {
  if(item < a[index - 1]){
    a[index] = a[index - 1];
    a[index - 1] = item; 
  }
})

console.log(a);