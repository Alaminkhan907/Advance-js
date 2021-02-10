const normalPerson = {
    firstName:'rahim',
    lastName :'uddin',
    salary :15000,
    getFullName: function(){
        console.log(this.firstName,this.lastName);
    },
    chargeBill: function(amount ,tips ,tax){
        console.log(this);
        this.salary =this.salary-amount-tips-tax ;
        return this.salary;
    }
}
/*normalPerson.chargeBill(150);
console.log(normalPerson.salary);*/

const heroPerson ={
    firstName:'Hero',
    lastName : 'Balam',
    salary:25000
}
const friendlyPerson ={
    firstName:'Hero',
    lastName : 'golam',
    salary:25000
}
// binding method
/*normalPerson.chargeBill()
const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
heroBillCharge(2000);
heroBillCharge(3000);
const friendlyPersonChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyPersonChargeBill(4000);
friendlyPersonChargeBill(4000);*/

//call method
/*normalPerson.chargeBill.call(heroPerson,900 ,100,150);
normalPerson.chargeBill.call(heroPerson,2000,200,50);
console.log(heroPerson.salary);

normalPerson.chargeBill.call(friendlyPerson,5000,20,54);
console.log(friendlyPerson.salary);*/

//apply method
normalPerson.chargeBill.apply(heroPerson, [3000, 300,50]);
console.log(heroPerson.salary);
