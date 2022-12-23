// Accountant, keeper of money and portfolio
class Accountant {
  constructor(currentState) {
    if(!currentState) { currentState = {} }
    this.cash = currentState.cash || 10000 // availableCash? cash and sweep vehicle?
    this.portfolio = currentState.portfolio || {}
    this.netLiquidity = currentState.netLiquidity || this.cash
    this.markedCash = currentState.markedCash || 0 // cash marked for unfilled orders - rename with TDA official?
    //this.shortCash ?
    this.orderList = currentState.orderList || []
  }

  updateStock(stockData) {
    for(const stock in stockData){
      console.log('acc: stock:', stock)
      if(!this.portfolio[stock]) { continue }
      let curr = this.portfolio[stock]
      // this.netLiquidity += (stock.markPrice - curr.markPrice) * curr.quantity
      // curr.markPrice = stockData.markPrice
      // last price? volume?
      this.netLiquidity += (stockData[stock] - curr.price) * curr.quantity
      curr.price = stockData[stock]
    }
  }

  orderSent(order) {
    // does this still work when going short?
    this.cash -= order.cost //|| order.price * order.quantity // calculate cost on order side
    this.markedCash += order.cost
    this.orderList.push({order, status: order.status || 'WORKING'})

  }

  updateOrder(orderData) {
    let order = this.orderList[orderData.id]
    order.status = orderData.status // id or name? is orderList an array or an object?
    // filled
    if(order.status = 'FILLED') {
      this.portfolio[order.stock].quantity += order.quantity
    }

    // partial filled

    // rejected

  }

  syncTDA() {} // sync with TDA every now and then

  getUnfilledOrders() {
    return this.orderList.filter(order => order.status = 'WORKING') // working? unfilled?
  }

  toString() { return `I've got this much: $${this.cash}, and these assets: ${JSON.stringify(this.portfolio)}` }
}

export default Accountant
