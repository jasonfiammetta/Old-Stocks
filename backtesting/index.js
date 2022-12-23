const tda = require('./tda.js')
require('./strategy')
require('./accountant')


// id, stockList, cash, metrics
// let strat = new strategy(0, ['SPY'], 10000, {})
// let dataSource
let acc = new accountant(10000)
let orderFiller = new orderFiller()

// let dataSource = createDataSource(tda.getPriceHistory())
// runSimulation()
// acc.start()
// console.log(acc.runSimulation())


console.log(acc.getNetLiquidity()) // console.log, writeFile

// let orders = []
//
// while(dataSource.hasNext()) {
//   let nextData = dataSource.next()
//   if(strategy.consume(nextData)) {
//     orders = strategy.getOrders() // workout how to cancel orders that are no longer in the order list
//   }
//   if(action) {accountant.placeOrder(action)}
//   accountant.updatePortfolio(nextData, strategy)
// }
