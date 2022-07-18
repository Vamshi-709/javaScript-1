
let arr = [3,5,2,1,3,5,3,1,5]
function removeDuplicates(arr) {
    var unique = [];
    for(i=0; i < arr.length; i++){ 
        if(unique.indexOf(arr[i]) === -1) { 
            unique.push(arr[i]); 
        } 
    }
    return unique;
}

console.log(removeDuplicates(arr));

    function removeDuplicates(arr) {
        return [...new Set(arr)];
    }
 
    console.log(removeDuplicates(arr));