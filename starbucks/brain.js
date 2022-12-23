// brain.js
// determine which strategies are ready for live, and which should remain
// hypothetical
// track performance and make the switch
import Accountant from './accountant.js'
import OrderFiller from './orders/orderFiller.js'
import Strategy from './strategy.js'

const strategyList = []
const mainAccountant = new Accountant(100000) // broker, overseer of all moneys and total portfolio
const orderFiller = new OrderFiller(['SPY', 'MSFT', 'TSLA'])

console.log('order filler:', orderFiller.orderList)

let r1 = function(stock) {
  console.log('r1:', stock)
  // if(stock) {}
  return .51
}
let dumbStrat = new Strategy('dumbStrat', ['SPY'], [r1])
strategyList.push(dumbStrat)


// const trackPerformance = function() {
//   return strategyList.map(strat => {
//     return {
//       id: strat.id,
//       profit: strat.profit,
//       numTrades: strat.numTrades,
//       maxDrawdown: strat.worstPerformance,
//       // etc.
//     }
//   })
// }

// console.log(mainAccountant.toString())

import { timeSince } from './lib/util.js'

let nextStockData
let updatedOrders
let accountState

// run on past data
const runSimulation = function(dataSource) {
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
    mainAccountant.updateOrdersalskjasldfj //TODO
    // indicatorList.forEach(ind => ind.update(nextStockData))
    let oList = []
    strategyList.forEach(strat => {
      // strat.update(newAccountState)
      let o = strat.updateStock(nextStockData)
      oList = oList.concat(o)
    })
    oList.forEach(order => {
      orderFiller.receiveOrder(order)
    })
    // trackPerformance()
  }
  console.log('finished at', new Date().toLocaleTimeString(), timeSince(startTime)[1])
  console.log(mainAccountant.toString())
  console.log('orderList,', JSON.stringify(orderFiller.orderList))
}

// const DataSource = require('./data/dataSource.js')
import DataSource from './data/dataSource.js'
import { fakeData } from './data/fakeData.js'
// const fakeData = import('./data/fakeData.js')
// import * as fakeData from './data/fakeData.js'

const fdata = new DataSource(fakeData)
// console.log('data:', JSON.stringify(fdata))
// console.log()
runSimulation(fdata)
