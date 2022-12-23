export default class orderFiller {
  constructor() {
    this.orderBook = {
      WORKING: {},
      FILLED: {},
      CANCELLED: {},
    }
    this.IDS = 1 // need better id system
  }

  receiveOrder(order) {
    order.id = this.IDS++
    order.status = 'WORKING'
    this.orderBook[order.status].push(order)
  }

  stockTick(stockData) {
    Object.keys(stockData).forEach((stock) => {
      this.orderBook.WORKING[stock] .compare(stockData[stock].mark)
    })
  }

  fillOrder(orderId) {

  }
}
