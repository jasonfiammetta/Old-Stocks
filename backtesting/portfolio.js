export default class portfolio {
  constructor(portfolio) {
    this.stockList = {}
    portfolio.forEach(stock => this.stockList.push(stock))
  }

  add(stock, quantity) {
    if(portfolio[stock]) { portfolio[stock] += quantity }
    else { portfolio[stock] = quantity }
  }

  closePosition(stock) {
    portfolio[stock] = 0
  }

  consume(data) {
    data.forEach(stockData => portfolio[stockData.name].price = stockData.price)
  }

  sum() {
    let sum = 0
    this.stockList.forEach(stock => sum += stock.quantity * stock.price)
    return sum
  }

  printPortfolio(totalCash) {
    // maxSpace = 1 + Math.logBase10(largest stock.quantity)
    // let str = `Stock${maxSpace*' '}Quantity${maxSpace*' '}Mark${maxSpace*' '}Value${maxSpace*' '}%`
    let str = 'Stock   Quantity   Mark   Value   %\n'
    this.stockList.forEach(stock => str += `${stock.name}   ${stock.quantity}   ${stock.mark}   ${stock.quantity * stock.mark}   ${(stock.quantity * stock.mark) / totalCash}\n`)
    return
  }
}
