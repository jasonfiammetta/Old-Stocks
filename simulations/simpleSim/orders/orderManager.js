class OrderManager {
  constructor(stockList) {
    this.stockList = stockList;
    this.orderList = {
      allOrders: {},
      byStock: {},
    };
    stockList.forEach((stock) => this.addStock(stock));
  }

  addStock(stock) {
    this.orderList.byStock[stock] = {
      orders: [],
      workingOrders: [],
    };
  }

  addOrder(order) {
    this.orderList.allOrders[order.hashId] = order;
    this.orderList.byStock[order.stock].orders.push(order.hashId);
    this.orderList.byStock[order.stock].workingOrders.push(order.hashId);
  }

  fillWorkingOrders(stockData) {
    Object.keys(stockData).forEach((stock) => {
      Object.keys(this.orderList.byStock[stock].workingOrders).forEach(
        (orderId) => {
          let order = this.orderList.allOrders[orderId];
          if (this.testOrder(order, stockData[stock])) {
            fillOrder(order);
          }
        }
      );
    });
  }

  testOrder(order, stock) {
    return order.quantity > 0
      ? order.price > stock.price
      : order.price > stock.price;
    // order.price > stock.price && order.quantity > 0
    // order.price < stock.price && order.quantity > 0
    // order.price > stock.price && order.quantity < 0
    // order.price < stock.price && order.quantity < 0
  }

  fillOrder(order) {
    this.orderList.allOrders[order.id].status = "FILLED";
    delete this.orderList.byStock[order.stock].workingOrders[order.id];
  }

  updateWorkingOrders(newOrders) {
    newOrders.forEach((order) => {
      if (this.orderList.allOrders[order.id]) {
        // change status
        // TODO
      } else {
        this.orderList.allOrders[order.id] = order;
        this.orderList.byStock[order.stock].orders.push(order.id);
        // if order.status === 'WORKING'
        this.orderList.byStock[order.stock].workingOrders.push(order.id);
      }
    });
  }
}

module.exports = OrderManager;
