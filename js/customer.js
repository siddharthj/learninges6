import { ObjectFormatter } from './formatutils';
import { Order } from './order';

const COL_SEPARATOR = ',';

const ORDER_SYMBOL = Symbol('order');

class Customer{
    constructor(id, name, address, credit, status){
        // Destructuring
        [this.id, this.name, this.address,
        this.credit, this.status] = arguments;
        // this of . Reaching the object via property
        this[ORDER_SYMBOL] = []
    }

    format(){
        let formattedMessage = ObjectFormatter.format(this).toUpperCase();

        return formattedMessage;
    }

    addOrder(order){
        if(order) {
            this[ORDER_SYMBOL].push(order);
        }
    }

    getOrders() {
        return this[ORDER_SYMBOL];
    }

    *[Symbol.iterator]() {
        for (let order in this[ORDER_SYMBOL]) {
         yield order;
        }
    }

    static createCustomer(csvString) {
        let customer = null;

        if(csvString) {
            let splittedCsvString  = csvString.split(COL_SEPARATOR);
            //  Spread operator
            customer = new Customer(...splittedCsvString);
        }
        return customer;
    }

   
}

export { Customer };