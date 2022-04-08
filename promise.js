let promise = new Promise ((resolve ,reject) =>{
    const a ="vamshi"
    const b ="vamshi"
    if(a==b){
        resolve()
    }else {
        reject()
    }
});
promise.then(function (){
    console.log("succes");
});
promise.catch(function (){
    console.log("error");
})