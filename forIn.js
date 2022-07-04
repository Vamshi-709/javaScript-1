// for in loop using in objects 
var person = {
    firstName: 'Vamshi',
    lastName: 'Krishna',
    ssn: '299-24-2351'
};

for(var vamshi in person) {
    console.log(vamshi + ':' + person[vamshi]);
}
