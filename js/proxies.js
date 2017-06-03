function processOrder(order) {
    console.log('order process started ...');
    console.log('order data :' + JSON.stringify(order));

    if (order.amount >= 1000) {
        console.log('Order status : PROCESSED');
    } else {
        console.log('order status - ON-HOLD');
    }
    return true;
}


Array.prototype.isExist = (item) => {
    let status = false;

    if (item) {
        for (let index in this) {
            if (this[index] === item) {
                status = true;
                break;
            }
        }
    }
    return status;
}

function doWork(orderId) {
    let order = {
        id: orderId,
        date: new Date(),
        amount: 2300
    };
    processOrder(order);
};

processOrder = new Proxy(processOrder, {
    apply: function (target, currentHandler, args) {
        let alreadyProcessedOrder = ['ord1001', 'ord1002', 'ord1003'];

        console.log('proxying stared ...');

        let orderId = args[0].id;

        if (alreadyProcessedOrder.isExist(orderId)) {
            console.log('order processing already completed ...');
            return true;
        } else {
            console.log('order processing was not completed earlier ...');
            let status = target(...args);
            return status;
        }
    }
});

doWork('ord1001');
doWork('ord1004');