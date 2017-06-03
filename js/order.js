import { ObjectFormatter } from './formatutils'
class Order {
    constructor(orderId, orderData, amount) {
        [this.orderId, this.orderData, this.amount] = arguments;
    }

    toString() {
        return ObjectFormatter.format(this);
    }
}

export { Order };