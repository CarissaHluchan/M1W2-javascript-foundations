function createItemStock(name, quantity, price) {
    var itemStock = {
        name: name || 'unknown',
        quantity: quantity || 0,
        price: price || 1.00,
    }
    return itemStock;
}

function makePurchase(itemStock, moneyForPurchase) {
    // { name: 'chips', quantity: 2, price: 2 }
    if (!itemStock.quantity) {
        return `Sorry, there are none left`
    }
    if (moneyForPurchase < itemStock.price) {
        return `Sorry, you need at least $${itemStock.price} to make that purchase`;
    } else {
        return `Here are your ${itemStock.name}`
    }
}

function collectChange(looseChange) {
    var change = 0;
    for (var i = 0; i < looseChange.length; i++) {
        change += looseChange[i];
    }
    return change;
}

module.exports = {
    createItemStock,
    makePurchase,
    collectChange,
}
