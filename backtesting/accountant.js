export default class accountant {
  constructor(liquidCash, stockList) {
    this.liquidCash = liquidCash
    this.stockList = stockList // Listen for data on every stock in this list. Accounts may only trade from this list.
    this.orders = {}
    this.portfolio = {}
    this.markedCash = 0
    this.netLiquidity = liquidCash
    this.stockPrices = {}
    // this.dataSource = dataSource
    // getPrices()
  }

  // getPrices() = {
  //   this.stockList.forEach(stock => {
  //     this.stockPrices[stock] = this.dataSource.stock.mark
  //   })
  // }

  stockTick(stockData) {
    // stock data
    // update portfolio prices
    Object.keys(stockData).forEach(stock => this.stockPrices[stock] = stockData[stock].mark)
    // update netLiquidity
    this.netLiquidity = this.calculateNetLiquidity()
  }

  orderSent(order) {
    // what do you do for market orders with no price?
    order.cost = order.price * order.quantity
    this.liquidCash -= order.cost
    this.markedCash += order.cost
    this.orders[order.id] = order
  }

  updateOrder(orderId, status) {
    let order = this.orders[orderId]
    order.status = status
    if(status === 'FILLED') {
      this.markedCash -= order.cost
      this.portfolio[order.stock] += quantity
      // this.netLiquidity -= order.fees // fees
      // this.netLiquidity = this.calculateNetLiquidity()
    }
  }

  calculateNetLiquidity() {
    return this.liquidCash + this.markedCash + Object.keys(portfolio).reduce((acc, stock) => {
      acc + portfolio[stock]*stockPrices[stock]
    }, 0)
  }
  getNetLiquidity() { return netLiquidity }

}
