import { InternetCustomer } from './internetcustomer';
import { Customer } from './customer';

let customer = new InternetCustomer(10, 'sid', 'delhi', 1200, true, 'URL');

console.log(customer.format());
console.log(customer instanceof InternetCustomer);


let customerCsv = '10,sid,delhi,1200,true';

let anotherCustomer  = Customer.createCustomer(customerCsv);

console.log(anotherCustomer.format());