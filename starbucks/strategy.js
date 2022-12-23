import OrderBuilder from './orders/orderBuilder.js'

class Strategy {
  constructor(name, stockList, rules, indicators) {
    this.name = name
    this.stockList = []
    for(let stock of stockList) {
      this.addStock(stock)
    }
    this.orderBuilder = new OrderBuilder(this.name)
    this.rules = rules
  }

  addStock(stock) {
    // get stock info?
    this.stockList.push(stock)
  }

  updateStock(stockData) {
    const oList = []
    for(const stock in stockData) {
      // if stock in this.stockList
      console.log('strat:', stock)
      const prediction = this.applyRules(stockData[stock])
      console.log('strat prediction:', prediction)
      if(prediction.guess > .5) {
        oList.push(this.sendOrder(stock, 10, stockData[stock] + prediction.offset))
      }
    }
    console.log('list of orders', oList)
    return oList
  }

  applyRules(stock) {
    const prediction = {
      guess: 0,
      offset: 0,
    }
    for(const rule of this.rules) {
      prediction.guess += rule(stock)
    }
    prediction.offset = .11 // calcMomentum()
    return prediction
  }

  sendOrder(stock, quantity, price) {
    let order = this.orderBuilder.buildOrder(stock, quantity, price)
    // log order?
    console.log('sending order', order)
    // create multiple orders? stop orders?
    // orderBuilder.
    return order
  }
}

export default Strategy
