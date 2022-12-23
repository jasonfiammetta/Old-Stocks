import { timeSince } from './lib/util.js'

let nextStockData
let updatedOrders
let accountState

// const sim = function() {
//   timeManager.start()
//   while(dataSource.hasNext()) {
//     timeManager.tick()
//     stockData = dataSource.next()
//     orderManager.fillWorkingOrders(stockData)
//     accountManager.updateAccountOrders(orderManager)
//     accountManager.updateStockPrices(stockData)
//     indicatorManager.updateIndicators(stockData)
//     strategyManager.updateStrategies(indicatorManager, stockData)
//     orderManager.updateWorkingOrders(strategyManager)
//   }
//   timeManager.end()
// }

// run on past data
export const runSimulation = function(dataSource) {
  console.log('beginning at', new Date().toLocaleTimeString())
  let since
  let now = timeSince()[0]
  let startTime = now
  while(dataSource.hasNext()) {
    [now, since] = timeSince(now)
    nextStockData = dataSource.next()
    console.log(new Date().toLocaleTimeString(), since, 'next stock data:', nextStockData)
    updatedOrders = orderFiller.update(nextStockData)
    // newAccountState = mainAccountant.update(nextStockData, updatedOrders)
    mainAccountant.updateStock(nextStockData)
    // indicatorList.forEach(ind => ind.update(nextStockData))
    let oList = []
    strategyList.forEach(strat => {
      // strat.update(newAccountState)
      oList.concat(strat.updateStock(nextStockData)
    })
    oList.forEach(order => )
    // trackPerformance()
  }
  console.log('finished at', new Date().toLocaleTimeString(), timeSince(startTime)[1])
  console.log(mainAccountant.toString())
}
