

class OrderFiller {
  constructor(stockList) {
    this.orderList = {
      allOrders: {},
      byStock: {}
    }
    for(let stock of stockList) {
      this.addStock(stock)
    }
    console.log('OrderFiller constructed, orderList:', this.orderList)
    // this.totalOrders = 0
  }

  addStock(stock) {
    this.orderList.byStock[stock] = {
      // orderQuantity: 0,
      orders: [],
      workingOrders: []
    }
  }

  receiveOrder(order) {
    // validate order
    // if(order.stock && order.quantity && order.price)
    order.status = 'WORKING'
    this.orderList.allOrders[order.hashId] = order
    let byStock = this.orderList.byStock[order.stock]
    byStock.orders.push(order.hashId)
    byStock.workingOrders.push(order.hashId)
    // byStock.orderQuantity++ //necessary?
  }

  fillOrder(orderId){
    let order = this.orderList.allOrders[orderId]
    order.status = 'FILLED'
    this.orderList[order.stock]
    return this.orderList.byStock[order.stock].workingOrders.splice(orderId)
  }

  testOrder(order, stockPrice) {
    // Should the order be filled?
    return (order.quantity > 0 && order.price > stockPrice) || (order.quantity < 0 && order.price < stockPrice)
  }

  update(stockData) {
    let justFilledOrders = []
    // { SPY: 435.10, TSLA: 780.91 }
    // console.log('OF stockData:', stockData)
    for(const stock in stockData) {
      // console.log('OF stock:', stock)
      for(let orderId of this.orderList.byStock[stock].workingOrders) {
        let order = this.orderList.allOrders[orderId]
        if(this.testOrder(order, stockData[stock])) {
          justFilledOrders.push(this.fillOrder(orderId))
        }
      }
    }
    return justFilledOrders
    // return something? return data for accountant?
  }


}

export default OrderFiller
