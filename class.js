class className{
    constructor(name ,lname, year){
        this.name = name ;
        this.lname =lname;
        this.age = year;
    }
}

let obj = new className("vamshi","krishna",22);
console.log(obj);

// Atm 
class ATM {
    constructor (withdraw){
        this.balance = 1000;
        this.minimum = 500;
        this.withdraw = withdraw;
    }
    getAmount(){
        if(this.balance - this.withdraw >= this.minimum){
         console.log(`Withdraw successful`, this.balance-this.withdraw); 
        }
        else if (this.balance-this.withdraw <= this.minimum){
            console.log(`insufcent Balance`);
        }else{
          console.log('Withdraw Unsuccessful');
        }
    }
}
let vam =new ATM(100);
vam.getAmount();