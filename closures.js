function outer(name){
    return function (massage){
        return massage + " "+ name
    }

}
let hello = outer('Vamshi')
console.log(hello('Hello'));

// clousers with SetTime out or loop
for (let i =0 ; i<=5; i++){
    (function (i){
        setTimeout(function(){
            console.log(i);
        },i * 1000)
    })(i)
}