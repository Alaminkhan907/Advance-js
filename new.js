class person{
    constructor(firstName ,lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new person('hero','balam',30000);
console.log(heroPerson);
const friendlyPerson = new person ('hero','kalam',50000);
console.log(friendlyPerson);