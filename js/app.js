import { InternetCustomer } from './internetcustomer';
import { Customer } from './customer';
import { Order } from './order'
import { DataProcessor } from './arrowfunctions'
import { HeavyWorker, HeavyWorker2 } from './withoutpromise'
import { HeavyWorkerPromise, HeavyWorkerPromise2 } from './withpromise';
import './enhancedobjectliterals';
import './proxies.js'
let customer = new InternetCustomer(10, 'sid', 'delhi', 1200, true, 'URL');


console.log(customer instanceof InternetCustomer);


let customerCsv = '10,sid,delhi,1200,true';

let anotherCustomer = Customer.createCustomer(customerCsv);
anotherCustomer.addOrder(new Order(1, new Date(), 400));
anotherCustomer.addOrder(new Order(2, new Date(), 400));
anotherCustomer.addOrder(new Order(3, new Date(), 400));
anotherCustomer.addOrder(new Order(4, new Date(), 400));

//console.log(anotherCustomer.format());

for (let order of anotherCustomer.getOrders()) {
    console.info(order.toString());
}

//console.info('Iterating Customer Object  Directly...');

for (let order of anotherCustomer)
    console.log(order.toString());
//console.log(anotherCustomer.format());


//console.log(JSON.stringify(anotherCustomer));



let dataProcessor = new DataProcessor();
let result = dataProcessor.process(
    (a, b) => a + b,
    function (a, b) {
        return a + b;
    },
    (a, b) => {
        console.log('with block ...');
        return a + b;
    }
);

console.log(result());

let woRker1 = new HeavyWorker();
let worker2 = new HeavyWorker2();
// Multiple async calls sequentially
// woRker1.doHeavyWork(10,
//     (result) => {
//         console.log('worker 1 completed...' + JSON.stringify(result));
//         worker2.doHeavyWork(20,
//             (result) => {
//                 console.log('worker 2 completed...' + JSON.stringify(result))
//             });
//     });
let input = 201;

let heavyWorker1 =  new HeavyWorkerPromise();
let heavyWorker2 = new HeavyWorkerPromise2();
// Calling Async functions parallely 
Promise.all(
    [
        heavyWorker1.doHeavyWork(input),
        heavyWorker2.doHeavyWork(input)
    ]
).then(
    data => console.log('Both successfully completed ...' + JSON.stringify(data)),
    error => console.log('one of the workers failed ...' + JSON.stringify(data))
)
