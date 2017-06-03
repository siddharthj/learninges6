let [id, name] = [10, 'sid'];
let licenseKey = 'HR51AT3584';

class Customer {
    format() {
        return this.id + ',' + this.name;
    }
}
// Enhanced Object Literals
let customer = {
    id,
    name,
    [`_Prop${licenseKey}`]: 100,
    work() {
        return 'Sucess'
    },
    __proto__: new Customer()
};

console.log(customer instanceof Customer);
console.log(customer.format());
console.log(customer.id);
console.log(customer.work());
console.log(customer._PropHR51AT3584);

